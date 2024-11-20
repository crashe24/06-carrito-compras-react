import { createContext, useState } from "react";

// Singleton
// 1. crear el contexto
export const FilterContext = createContext()

// 2. Crear el provider para proveer el contexto
export function FilterProvider ({children}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0 
    })

    return (
        <FilterContext.Provider value={{
            // 3. Definir el estado inicial
           filters,
           setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}
