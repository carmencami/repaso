const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            isAuthenticated: false,
            message: null,
            user: null, 
            token: null, 
            authError: null, 
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            register: async (username, email, password) => {
                try {
                    console.log("Datos a enviar:", { username, email, password });
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/register`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username,
                            email: email,
                            password: password
                        })
                    });
            
                    if (!resp.ok) throw new Error("Error al registrar el usuario");
                    const data = await resp.json();
                    setStore({ 
                        user: data.user, 
                        token: data.token, 
                        isAuthenticated: true, // Establece el estado de autenticación
                        authError: null 
                    });
                } catch (error) {
                    console.log("Error en el registro:", error);
                    setStore({ authError: error.message });
                }
            },
            
            login: async (email, password) => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    });
            
                    if (!resp.ok) throw new Error("Error en el inicio de sesión");
                    const data = await resp.json();
                    setStore({ 
                        user: data.user, 
                        token: data.token, 
                        isAuthenticated: true, // Establece el estado de autenticación
                        authError: null 
                    });
                } catch (error) {
                    console.log("Error en el inicio de sesión:", error);
                    setStore({ authError: error.message });
                }
            },
            

            logout: () => {
                setStore({ user: null, token: null, authError: null });
            },

            getMessage: async () => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            changeColor: (index, color) => {
                const store = getStore();

                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
