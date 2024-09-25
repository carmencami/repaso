from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    carts = db.relationship('Cart', backref='usuario', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "created_at": self.created_at,
            "carts": [cart.serialize() for cart in self.carts]   
        }

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    update_at =db.Column(db.DateTime, default=datetime.utcnow)
    cart_items= db.relationship("CartItem", backref='cart', lazy=True)

    def serialize(self):
        return{
            "id": self.id, 
            "created_ad": self.created_at,
            "update_at": self.update_at,
            "items": [item.serialize() for item in self.cart_items]
        }
class CartItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey('cart.id'), nullable= True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=True)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
        return{
            "product_id": self.product_id,
            "quantity": self.quantity,
            "created_at": self.created_at
        }
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    description= db.Column(db.String(300), nullable=False)
    price= db.Column(db.Integer, nullable=False)
    stock= db.Column(db.Integer, nullable=False)
    image_url= db.Column(db.String(225))
    category_id= db.Column(db.Integer, db.ForeignKey('category.id'))
    created_at= db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "description":self.description,
            "price":self.price,
            "stock":self.stock,
            "image_url":self.image_url,
            "category_id":self.category_id
        }
class Category(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(300), nullable=False)
