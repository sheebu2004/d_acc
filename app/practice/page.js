"use client"

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Car, Bike, Truck, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PracticeBooking() {
  const router = useRouter();

  const practiceTypes = [
    {
      title: "Motorcycle Practice",
      icon: <Bike className="h-12 w-12" />,
      description: "Practice motorcycle riding skills",
      duration: "2 hours",
      price: "$50/session",
      availability: "Mon-Sat",
      includes: ["Basic maneuvers", "Traffic navigation", "Parking practice"]
    },
    {
      title: "Car Practice",
      icon: <Car className="h-12 w-12" />,
      description: "Practice car driving skills",
      duration: "2 hours",
      price: "$60/session",
      availability: "Mon-Sun",
      includes: ["City driving", "Highway practice", "Parking skills"]
    },
    {
      title: "Commercial Vehicle Practice",
      icon: <Truck className="h-12 w-12" />,
      description: "Heavy vehicle driving practice",
      duration: "3 hours",
      price: "$100/session",
      availability: "Mon-Fri",
      includes: ["Load handling", "Long vehicle maneuvering", "Reversing practice"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Practice Session</h1>
        <p className="text-lg text-gray-600">Choose your vehicle type and schedule a practice session</p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {practiceTypes.map((practice, index) => (
          <motion.div
            key={practice.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              className="h-full hover:shadow-xl transition-shadow cursor-pointer bg-white"
              onClick={() => router.push(`/schedule-practice/${practice.title.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {practice.icon}
                </div>
                <CardTitle className="text-xl font-bold text-center">{practice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{practice.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>{practice.duration}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>{practice.availability}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{practice.price}</div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Session Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {practice.includes.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

