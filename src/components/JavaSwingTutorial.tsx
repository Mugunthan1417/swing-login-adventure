import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, ChevronLeft, Play, Code, Eye, CheckCircle } from 'lucide-react';
import ProjectSetupContent from './tutorial-steps/ProjectSetupContent';
import JFrameCreationContent from './tutorial-steps/JFrameCreationContent';
import UIComponentsContent from './tutorial-steps/UIComponentsContent';
import LayoutSetupContent from './tutorial-steps/LayoutSetupContent';
import ComponentConfigContent from './tutorial-steps/ComponentConfigContent';
import WindowPositioningContent from './tutorial-steps/WindowPositioningContent';
import TestingContent from './tutorial-steps/TestingContent';

const JavaSwingTutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      title: "Setting Up Your NetBeans Project",
      description: "Create a new Java Application project in NetBeans IDE",
      content: "project-setup"
    },
    {
      title: "Creating JFrame Form",
      description: "Add a new JFrame Form to your project",
      content: "jframe-creation"
    },
    {
      title: "Adding UI Components",
      description: "Design your login form with labels, text fields, and buttons",
      content: "ui-components"
    },
    {
      title: "Layout Management",
      description: "Configure GroupLayout for proper component alignment",
      content: "layout-setup"
    },
    {
      title: "Component Configuration",
      description: "Set meaningful names, tooltips, and properties",
      content: "component-config"
    },
    {
      title: "Window Positioning",
      description: "Center the login window on screen",
      content: "window-positioning"
    },
    {
      title: "Testing Your Form",
      description: "Run and test your completed login form",
      content: "testing"
    }
  ];

  const markStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      markStepComplete(currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Java Swing Login Form Tutorial
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Learn to create professional login forms using NetBeans IDE and Java Swing
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Beginner Friendly • Step-by-Step • Interactive
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {completedSteps.length} steps completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Steps Navigation */}
        <div className="grid grid-cols-7 gap-2 mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                index === currentStep
                  ? 'bg-blue-600 text-white'
                  : completedSteps.includes(index)
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div className="flex items-center justify-center mb-2">
                {completedSteps.includes(index) ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="font-bold">{index + 1}</span>
                )}
              </div>
              <div className="text-xs text-center">
                {step.title.split(' ').slice(0, 2).join(' ')}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {currentStep + 1}
              </span>
              {steps[currentStep].title}
            </CardTitle>
            <CardDescription>
              {steps[currentStep].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StepContent step={steps[currentStep].content} />
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <Button 
            onClick={() => markStepComplete(currentStep)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <CheckCircle className="h-4 w-4" />
            Mark Complete
          </Button>

          <Button 
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const StepContent = ({ step }: { step: string }) => {
  switch (step) {
    case 'project-setup':
      return <ProjectSetupContent />;
    case 'jframe-creation':
      return <JFrameCreationContent />;
    case 'ui-components':
      return <UIComponentsContent />;
    case 'layout-setup':
      return <LayoutSetupContent />;
    case 'component-config':
      return <ComponentConfigContent />;
    case 'window-positioning':
      return <WindowPositioningContent />;
    case 'testing':
      return <TestingContent />;
    default:
      return <div>Content not found</div>;
  }
};

export default JavaSwingTutorial;
