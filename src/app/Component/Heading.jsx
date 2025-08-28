import React from 'react'

const Heading = ({title,content}) => {
  return (
      <div className="flex flex-wrap gap-12 justify-center lg:justify-start items-center py-10 text-center lg:text-left">
        <h2 className="bg-pri text-center lg:text-left- rounded-lg p-3  text-3xl font-medium">
         {title}
        </h2>
        <p className="w-full lg:w-[473px]">
          {content}
        </p>
      </div>
  )
}

export default Heading