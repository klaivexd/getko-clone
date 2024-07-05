import React from 'react'
import styles from '../style';
import { categories } from '../constants';

const Category = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className={`${styles.boxWidth} p-4 mb-3 font-bold`}>All Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center ">
        {categories.map((category, index) => (
          <div key={category.id} className="flex flex-col items-center cursor-pointer">
            <a
              href={`${category.id}`}
            >
              <img
                src={`${category.img}`} // Adjust path as per your project structure
                alt={category.name}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300
                object-cover w-auto h-40 mb-2 rounded-tl-3xl rounded-br-3xl p-2"
              />
            </a>
            <span className="text-sm font-bold">{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category