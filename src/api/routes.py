"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cart, CartItem, Product, Category
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    print("Datos recibidos:", data)

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"msg": "Todos los campos son requeridos"}), 400 
    if User.query.filter_by(email=email).first():
        return jsonify({"msg":"Este email ya está registrado"}), 400
    
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

    user = User(username=username, email=email, password=hashed_password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg":"Usuario creado correctamente"}), 200

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return ({"msg": "Todos los campos son requeridos"}), 400
    
    user = User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity={'id':user.id})
        return jsonify(access_token=access_token), 200

    return jsonify({"msg":"Error en el login"}), 401

@api.route('/users/<int:id>', methods=['GET'])
@jwt_required()
def get_user(id):
    current_user = get_jwt_identity()
    user = User.query.get(id)

    if not user:
        return jsonify({"msg":"Usuario no encontrado"}), 404
    return jsonify({
        "id": user.id,
        "email": user.email, 
        "username": user.username
    }), 200

@api.route('/product/<int:id>', methods=['GET'])
def get_product(id):
    product = Product.query.get(id)

    if not product:
        return jsonify({"msg":"producto no encontrado"}), 404
    
    return jsonify(product.serialize()), 200

@api.route('/cart', methods=['POST'])
@jwt_required()
def create_cart():
    current_user = get_jwt_identity()
    new_cart = Cart(user_id=current_user['id'])
    db.session.add(new_cart)
    db.session.commit()
    return jsonify({'msg': "Carrito creado", "cart_id":new_cart.id}), 200

@api.route('/cart<int:cart_id>', methods=['GET'])
@jwt_required()
def get_cart(cart_id):
    cart = Cart.query.get(cart_id)

    if not cart:
        return jsonify({'msg':'Carrito no encontrado'}), 404
    
    return jsonify(cart.serialize()), 200

@api.route('/cart/<int:cart_id>/items', methods=['POST'])
@jwt_required()
def add_item_to_cart(cart_id):
    data = request.get_json()
    product_id = data.get('product_id')
    quantity = data.get('quantity')

    if not product_id or not quantity:
        return ({"msg": "No has seleccionado el producto"}), 404
    
    cart_item = CartItem(cart_id=cart_id, product_id=product_id, quantity=quantity)
    db.session.add(cart_item)
    db.session.commit()

    return ({"msg": "Producto añadido al carrito", "item_id": cart_item.id}), 201
