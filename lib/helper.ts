import { BarChart, List } from "lucide-react";

export default function getFirstLetters(input: string): string {
    // Split the input string into an array of words
    const words = input.split(/\s+/);
  
    // Extract the first letter from each word and join them into a string
    const firstLetters = words.map((word) => word.charAt(0)).join('');
  
    return firstLetters.toUpperCase(); // Convert to uppercase if needed
  }

  export const navigation = [
    { name: 'Dashboard', href: '/', current: true , icon: ''},
    { name: 'Books', href: '/books', current: false , icon: 'null'},
    { name: 'Cart', href: '/cart', current: false , icon: 'null'},
    { name: 'Calendar', href: '/calendar', current: false , icon: ''},
  ]

  export const navigation2 = [
    { name: 'Dashboard22', href: '/', current: true , icon: ''},
    { name: 'Books', href: '/books', current: false , icon: ''},
    { name: 'Cart22', href: '/cart', current: false, icon: '' },
    { name: 'Calendar22', href: '/calendar', current: false , icon: ''},
  ]
  const teacherRoutes = [
    {
      icon: List,
      label: "Courses",
      href: "/teacher/courses",
    },
    {
      icon: BarChart,
      label: "Analytics",
      href: "/teacher/analytics",
    },
  ]

 