import React, { createContext, useState } from "react";

export const ComandaContext = createContext({

    comandas: {},
    addComanda: (idMesa, nameComida, cantidad) => { },
    removeComanda: (idMesa, nameComida) => { },


});

export function ComandaProvider({ children }) {
    const [comandas, setComandas] = useState({});

    function addComanda(idMesa, nameComida, cantidad) {
        const nuevasComandas = { ...comandas };

        if (!nuevasComandas[idMesa]) {
            nuevasComandas[idMesa] = [];
        }

        nuevasComandas[idMesa].push({ nameComida, cantidad });

        setComandas(nuevasComandas);
    }

    function removeComanda(idMesa, nameComida) {
        const nuevasComandas = { ...comandas };

        if (nuevasComandas[idMesa]) {

            nuevasComandas[idMesa] = nuevasComandas[idMesa].filter(
                (comanda) => comanda.nameComida !== nameComida
            );

            if (nuevasComandas[idMesa].length === 0) {
                delete nuevasComandas[idMesa];
            }

            setComandas(nuevasComandas);
        }
    }

    const value = {
        comandas: comandas,
        addComanda: addComanda,
        removeComanda: removeComanda,
    }
    return <ComandaContext.Provider value={value}>
        {children}
    </ComandaContext.Provider>
};