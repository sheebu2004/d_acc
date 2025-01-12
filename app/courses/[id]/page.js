'use client'

import { useParams } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Users, Clock, ChevronRight } from 'lucide-react'
import { coursesData } from '../../data/courses'

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = parseInt(params.id)
  const course = coursesData.find(c => c.id === courseId)

  if (!course) return <div>Course not found</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                <p className="text-gray-600">Instructor: {course.instructor}</p>
              </div>
              <Badge variant="secondary" className="text-lg">{course.level}</Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400 mr-2" />
                <div>
                  <p className="font-bold">{course.rating}/5.0</p>
                  <p className="text-sm text-gray-600">Course Rating</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-gray-400 mr-2" />
                <div>
                  <p className="font-bold">{course.students}</p>
                  <p className="text-sm text-gray-600">Students Enrolled</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-gray-400 mr-2" />
                <div>
                  <p className="font-bold">{course.duration}</p>
                  <p className="text-sm text-gray-600">Course Duration</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Course Description</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center border-t pt-6">
              <div>
                <p className="text-gray-600">Course Price</p>
                <p className="text-3xl font-bold text-blue-600">${course.price}</p>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

