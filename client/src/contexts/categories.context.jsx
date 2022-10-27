import { useState, useEffect, createContext } from 'react'
// import SHOP_DATA from '../shop-data'
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'
export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  /* 
    COMMENT OUT AFTER FIRST RENDER
  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  })
 */

  // Return products api from firebase
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()

      // console.log('CATEGORIES: ', categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])
  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  )
}
