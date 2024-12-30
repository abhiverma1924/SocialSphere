interface SimpleFeatureProps {
    title: string
    isNew?: boolean
  }
  
  export function SimpleFeature({ title, isNew }: SimpleFeatureProps) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-gray-900 hover:text-gray-600 transition-colors cursor-pointer text-[#3454D1]">
          {title}
        </span>
        {isNew && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
            New
          </span>
        )}
      </div>
    )
  }
  
  