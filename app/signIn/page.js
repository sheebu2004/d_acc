"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card';
import { 
  User, Mail, Lock, School, Phone, MapPin, 
  Building, Car, ChevronRight, ArrowLeft 
} from 'lucide-react';

const AuthForms = () => {
  const [activeForm, setActiveForm] = useState('selection');
  const [userType, setUserType] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const InputField = ({ icon: Icon, placeholder, type = "text" }) => (
    <motion.div 
      variants={inputVariants}
      className="relative"
    >
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Icon size={20} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </motion.div>
  );

  const SelectionView = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Choose Account Type</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer"
      >
        <Card 
          className="hover:shadow-lg transition-shadow"
          onClick={() => {
            setUserType('student');
            setActiveForm('auth');
          }}
        >
          <CardContent className="flex items-center p-6">
            <User className="h-6 w-6 text-blue-500 mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold">Student Account</h3>
              <p className="text-sm text-gray-500">Learn to drive with certified instructors</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer"
      >
        <Card 
          className="hover:shadow-lg transition-shadow"
          onClick={() => {
            setUserType('school');
            setActiveForm('auth');
          }}
        >
          <CardContent className="flex items-center p-6">
            <School className="h-6 w-6 text-green-500 mr-4" />
            <div className="flex-1">
              <h3 className="font-semibold">Driving School</h3>
              <p className="text-sm text-gray-500">Manage your driving school</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );

  const StudentForm = () => (
    <motion.form 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-4"
    >
      {!isLogin && <InputField icon={User} placeholder="Full Name" />}
      <InputField icon={Mail} placeholder="Email" type="email" />
      <InputField icon={Lock} placeholder="Password" type="password" />
      {!isLogin && <InputField icon={Phone} placeholder="Phone Number" />}
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        {isLogin ? 'Sign In' : 'Create Account'}
      </motion.button>
    </motion.form>
  );

  const SchoolForm = () => (
    <motion.form 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-4"
    >
      {!isLogin && (
        <>
          <InputField icon={Building} placeholder="School Name" />
          <InputField icon={User} placeholder="Owner Name" />
        </>
      )}
      <InputField icon={Mail} placeholder="Business Email" type="email" />
      <InputField icon={Lock} placeholder="Password" type="password" />
      {!isLogin && (
        <>
          <InputField icon={Phone} placeholder="Business Phone" />
          <InputField icon={MapPin} placeholder="Address" />
          <InputField icon={Car} placeholder="Number of Vehicles" />
        </>
      )}
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        {isLogin ? 'Sign In' : 'Register School'}
      </motion.button>
    </motion.form>
  );

  const ImageSection = () => (
    <div className="hidden lg:block w-[40%] relative overflow-hidden rounded-l-2xl bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="absolute inset-0 bg-black/20" />
      <Image
        src="/car_image.jpg"
        alt="Driving School"
        width={400}
        height={700}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative h-full flex flex-col justify-end p-12 text-white">
        <h1 className="text-4xl font-bold mb-4 italic">Learn Driving with Confidence</h1>
        <p className="text-[0.6rem] opacity-90">Join the best driving school platform to start your journey</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px]">
          <ImageSection />
          
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            {activeForm === 'auth' && (
              <motion.button
                onClick={() => setActiveForm('selection')}
                className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </motion.button>
            )}

            <AnimatePresence mode="wait">
              {activeForm === 'selection' ? (
                <SelectionView key="selection" />
              ) : (
                <motion.div key="auth-form">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">
                      {isLogin ? 'Welcome Back!' : 'Create Account'}
                    </h2>
                    <p className="text-gray-600">
                      {isLogin 
                        ? 'Sign in to your account' 
                        : userType === 'student' 
                          ? 'Start your driving journey' 
                          : 'Register your driving school'
                      }
                    </p>
                  </div>

                  {userType === 'student' ? <StudentForm /> : <SchoolForm />}

                  <motion.p 
                    className="text-center mt-6 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;