'use client'

import React, { useState } from 'react'

import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'
import { HR } from '../../../_components/HR'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategories = (categoryId: string) => {
    const isSelected = selectedCategories.includes(categoryId)
    const updatedSelection = isSelected
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId]

    setSelectedCategories(updatedSelection)
  }

  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)

            return (
              <Checkbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={() => handleCategories(category.id)}
              />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}></h6>
        <div className={classes.categories}>
          <RadioButton />
        </div>
      </div>
    </div>
  )
}

export default Filters
