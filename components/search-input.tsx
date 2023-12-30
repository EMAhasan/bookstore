import { Search } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const SearchInput = (props: Props) => {
  return (
    <div className=' flex-1 justify-center  items-center p-1 '>
    <div className="relative w-4/5 mx-auto ">
    <Search
      className="h-4 w-4 absolute top-3 left-3 text-slate-600"
    />
    <Input
    //   onChange={(e) => setValue(e.target.value)}
    //   value={value}
      className="w-full  pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
      placeholder="Search for a course"
    />
    <Button className='absolute bottom-0 right-1 text-slate-600 rounded-full hover:text-xl' variant='secondary'> X</Button>
  </div>
  </div>
  )
}

export default SearchInput