
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Code, Settings } from 'lucide-react';

const WindowPositioningContent = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="visual" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="visual">Visual Method</TabsTrigger>
          <TabsTrigger value="code">Code Method</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visual" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Monitor className="h-5 w-5 text-blue-600" />
              Centering Window Using NetBeans Designer
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Right-click Form Background</p>
                      <p className="text-sm text-gray-600">In Design view, right-click empty space on JFrame</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Properties Menu</p>
                      <p className="text-sm text-gray-600">Select "Properties" from context menu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Find defaultCloseOperation</p>
                      <p className="text-sm text-gray-600">Locate this property in Properties panel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">4</Badge>
                    <div>
                      <p className="font-medium">Add Custom Code</p>
                      <p className="text-sm text-gray-600">We'll add centering code in the constructor</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-sm">Window Center Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 p-4 rounded relative h-40">
                    <div className="absolute inset-0 border-2 border-dashed border-gray-400 rounded">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-white border border-gray-600 p-3 rounded shadow-lg text-xs">
                          <div className="text-center font-bold mb-2">Login Form</div>
                          <div className="space-y-1">
                            <div className="flex gap-2">
                              <span>User:</span>
                              <div className="bg-gray-100 px-2 py-1 flex-1"></div>
                            </div>
                            <div className="flex gap-2">
                              <span>Pass:</span>
                              <div className="bg-gray-100 px-2 py-1 flex-1"></div>
                            </div>
                            <button className="w-full bg-blue-500 text-white px-2 py-1 rounded text-xs">Login</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 text-xs text-gray-600">Screen</div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Centered window appears in middle of screen
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Code className="h-5 w-5 text-green-600" />
              Adding Centering Code
            </h3>
            
            <Card>
              <CardHeader>
                <CardTitle>Manual Code Addition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">1</Badge>
                      <div>
                        <p className="font-medium">Switch to Source View</p>
                        <p className="text-sm text-gray-600">Click "Source" tab at top of editor</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">2</Badge>
                      <div>
                        <p className="font-medium">Find Constructor</p>
                        <p className="text-sm text-gray-600">Locate the <code>public LoginForm()</code> constructor</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">3</Badge>
                      <div>
                        <p className="font-medium">Add After initComponents()</p>
                        <p className="text-sm text-gray-600">Insert centering code after the <code>initComponents();</code> call</p>
                      </div>
                    </div>
                  </div>
                  
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`public LoginForm() {
    initComponents();
    
    // Center the window on screen
    setLocationRelativeTo(null);
    
    // Optional: Set window size if needed
    // setSize(350, 250);
    
    // Optional: Prevent window resizing
    // setResizable(false);
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-800 mb-2">🎯 Alternative Centering Methods</h4>
                <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
                  <code>{`// Method 1: Simple centering (recommended)
setLocationRelativeTo(null);

// Method 2: Manual calculation
Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
Dimension windowSize = getSize();
setLocation((screenSize.width - windowSize.width) / 2,
           (screenSize.height - windowSize.height) / 2);

// Method 3: Center relative to parent
setLocationRelativeTo(parentComponent);`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="properties" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Settings className="h-5 w-5 text-purple-600" />
              Window Properties Configuration
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Essential Window Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-purple-700">title</p>
                      <p className="text-gray-600">Set to "User Login" or "Authentication"</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">defaultCloseOperation</p>
                      <p className="text-gray-600">Keep as EXIT_ON_CLOSE for main window</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">resizable</p>
                      <p className="text-gray-600">Set to false for login forms (optional)</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">size</p>
                      <p className="text-gray-600">Let pack() calculate, or set manually (e.g., 350x250)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Professional Touches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-purple-700">iconImage</p>
                      <p className="text-gray-600">Add custom application icon</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">minimumSize</p>
                      <p className="text-gray-600">Prevent window from becoming too small</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">alwaysOnTop</p>
                      <p className="text-gray-600">Keep login window visible (use sparingly)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-purple-800 mb-2">📐 Sizing Recommendations</h4>
                <div className="text-sm text-purple-700 space-y-2">
                  <p><strong>Small Login Form:</strong> 300x200 pixels</p>
                  <p><strong>Medium Login Form:</strong> 350x250 pixels</p>
                  <p><strong>Large Login Form:</strong> 400x300 pixels</p>
                  <p><strong>Tip:</strong> Use <code>pack()</code> to auto-size based on components</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WindowPositioningContent;
