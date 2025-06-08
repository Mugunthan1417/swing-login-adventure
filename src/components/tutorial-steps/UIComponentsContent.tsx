
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mouse, Type, Lock, Square } from 'lucide-react';

const UIComponentsContent = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="instructions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="instructions">Adding Components</TabsTrigger>
          <TabsTrigger value="preview">Form Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="instructions" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Mouse className="h-5 w-5 text-blue-600" />
                Drag & Drop Components
              </h3>
              
              <div className="space-y-4">
                {/* Title Label */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">1</Badge>
                      <div className="flex-1">
                        <p className="font-medium flex items-center gap-2">
                          <Type className="h-4 w-4" />
                          Title Label
                        </p>
                        <p className="text-sm text-gray-600 mb-2">From Palette → Swing Controls → Label</p>
                        <div className="bg-gray-50 p-2 rounded text-xs">
                          <strong>Text:</strong> "User Login"<br/>
                          <strong>Font:</strong> Bold, Size 18
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Username Components */}
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">2</Badge>
                      <div className="flex-1">
                        <p className="font-medium">Username Section</p>
                        <div className="space-y-2 mt-2">
                          <div className="bg-gray-50 p-2 rounded text-xs">
                            <strong>Label:</strong> "Username:"<br/>
                            <strong>Text Field:</strong> For username input
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Password Components */}
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">3</Badge>
                      <div className="flex-1">
                        <p className="font-medium flex items-center gap-2">
                          <Lock className="h-4 w-4" />
                          Password Section
                        </p>
                        <div className="space-y-2 mt-2">
                          <div className="bg-gray-50 p-2 rounded text-xs">
                            <strong>Label:</strong> "Password:"<br/>
                            <strong>Password Field:</strong> From Swing Controls
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Button */}
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">4</Badge>
                      <div className="flex-1">
                        <p className="font-medium flex items-center gap-2">
                          <Square className="h-4 w-4" />
                          Login Button
                        </p>
                        <div className="space-y-2 mt-2">
                          <div className="bg-gray-50 p-2 rounded text-xs">
                            <strong>Text:</strong> "Login"<br/>
                            <strong>Type:</strong> JButton from Swing Controls
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Palette Guide */}
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-sm">Component Palette Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <p className="font-medium text-sm mb-2">Swing Controls</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-200 rounded"></div>
                        <span>Label</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-200 rounded"></div>
                        <span>Text Field</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-200 rounded"></div>
                        <span>Password Field</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-200 rounded"></div>
                        <span>Button</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                    <p className="text-xs text-yellow-700">
                      <strong>💡 Tip:</strong> If Palette is not visible, go to Window → Palette
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-green-800 mb-2">✅ Component Checklist</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-green-700">
                <div>
                  <p>□ Title Label (User Login)</p>
                  <p>□ Username Label</p>
                  <p>□ Username Text Field</p>
                </div>
                <div>
                  <p>□ Password Label</p>
                  <p>□ Password Field</p>
                  <p>□ Login Button</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>Form Layout Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="bg-white border border-gray-300 p-6 max-w-sm mx-auto rounded shadow-sm">
                  <h2 className="text-lg font-bold text-center mb-6">User Login</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Username:</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Password:</label>
                      <input 
                        type="password" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                      />
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                      Login
                    </button>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 text-center mt-4">
                This is how your form will look once components are properly arranged
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UIComponentsContent;
