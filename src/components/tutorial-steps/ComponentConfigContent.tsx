
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Tag, HelpCircle, Code } from 'lucide-react';

const ComponentConfigContent = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="naming" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="naming">Variable Names</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="tooltips">Tooltips</TabsTrigger>
        </TabsList>
        
        <TabsContent value="naming" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Tag className="h-5 w-5 text-blue-600" />
              Setting Meaningful Variable Names
            </h3>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <p className="text-sm text-blue-700 mb-4">
                  <strong>Why naming matters:</strong> Good variable names make your code readable, maintainable, and easier to debug.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">How to Rename Components</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Select Component</p>
                      <p className="text-sm text-gray-600">Click on the component in Design view</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Open Properties</p>
                      <p className="text-sm text-gray-600">Properties panel appears (usually on right side)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Change Variable Name</p>
                      <p className="text-sm text-gray-600">Find "Variable Name" property and modify it</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Recommended Naming Convention</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Component</span>
                      <span className="font-medium">Variable Name</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Title Label</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">titleLabel</code>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Username Label</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">usernameLabel</code>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Username Field</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">usernameField</code>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Password Label</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">passwordLabel</code>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Password Field</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">passwordField</code>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Login Button</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">loginButton</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="properties" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Settings className="h-5 w-5 text-green-600" />
              Important Component Properties
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Text Field Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">columns</p>
                      <p className="text-gray-600">Set to 15-20 for appropriate width</p>
                    </div>
                    <div>
                      <p className="font-medium">text</p>
                      <p className="text-gray-600">Clear default text or set placeholder</p>
                    </div>
                    <div>
                      <p className="font-medium">font</p>
                      <p className="text-gray-600">Choose readable font (e.g., Dialog, 12pt)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Button Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">text</p>
                      <p className="text-gray-600">"Login" or "Sign In"</p>
                    </div>
                    <div>
                      <p className="font-medium">background</p>
                      <p className="text-gray-600">Professional color (e.g., blue)</p>
                    </div>
                    <div>
                      <p className="font-medium">foreground</p>
                      <p className="text-gray-600">Contrasting text color (white)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-800 mb-2">🎨 Styling Tips</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Use consistent fonts across all components</li>
                  <li>• Make sure text colors have good contrast</li>
                  <li>• Set appropriate field widths for user input</li>
                  <li>• Consider using mnemonics for keyboard accessibility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="tooltips" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-purple-600" />
              Adding Helpful Tooltips
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Setting Tooltips</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Select Component</p>
                      <p className="text-sm text-gray-600">Click the component you want to add tooltip to</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Find toolTipText Property</p>
                      <p className="text-sm text-gray-600">In Properties panel, locate "toolTipText"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Enter Helpful Text</p>
                      <p className="text-sm text-gray-600">Write clear, concise help text</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Suggested Tooltips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Username Field</p>
                      <p className="text-gray-600 italic">"Enter your username or email address"</p>
                    </div>
                    <div>
                      <p className="font-medium">Password Field</p>
                      <p className="text-gray-600 italic">"Enter your password (case sensitive)"</p>
                    </div>
                    <div>
                      <p className="font-medium">Login Button</p>
                      <p className="text-gray-600 italic">"Click to authenticate and log in"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-purple-800 mb-2">💡 Tooltip Best Practices</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Keep tooltips short and informative</li>
                  <li>• Use simple, non-technical language</li>
                  <li>• Don't repeat obvious information</li>
                  <li>• Include format hints (e.g., "Format: MM/DD/YYYY")</li>
                  <li>• Test tooltips by hovering over components</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentConfigContent;
