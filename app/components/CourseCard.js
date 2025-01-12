'use client'

import PropTypes from 'prop-types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Users, Clock, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function CourseCard({ course }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
            <CardDescription>by {course.instructor}</CardDescription>
          </div>
          <Badge variant="secondary">{course.level}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-400 mr-1" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-400 mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${course.price}</span>
          <Link href={`/courses/${course.id}`}>
            <Button>
              View Details
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    students: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

