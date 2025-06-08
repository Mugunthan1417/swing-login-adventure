
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Bug, CheckCircle, Code } from 'lucide-react';

const TestingContent = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="running" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="running">Running Form</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
        </TabsList>
        
        <TabsContent value="running" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Play className="h-5 w-5 text-green-600" />
              Running Your Login Form
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Multiple Ways to Run</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Right-click LoginForm.java</p>
                      <p className="text-sm text-gray-600">In Projects panel → Run File (Shift+F6)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Use Menu Bar</p>
                      <p className="text-sm text-gray-600">Run → Run File (when LoginForm.java is selected)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Modify Main Class</p>
                      <p className="text-sm text-gray-600">Update LoginFormApp.java to launch LoginForm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-sm">Expected Behavior</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Window appears centered on screen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>All components are visible and aligned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Text fields accept input</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Password field masks characters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Tooltips appear on hover</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Button is clickable (no action yet)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Updated Main Class Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`package loginformapp;

import javax.swing.SwingUtilities;

public class LoginFormApp {
    
    public static void main(String[] args) {
        // Run the GUI code on the Event Dispatch Thread
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                // Create and display the login form
                LoginForm loginForm = new LoginForm();
                loginForm.setVisible(true);
            }
        });
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="testing" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              Testing Your Form
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Visual Testing Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Window centers on screen when opened</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>All labels are clearly visible</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Text fields are properly aligned</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Components have consistent spacing</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Window title displays correctly</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Form looks professional</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Functionality Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Can type in username field</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Can type in password field</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Password characters are masked</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Tab key moves between fields</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Tooltips appear on hover</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Button responds to clicks</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-blue-800 mb-2">🧪 Advanced Testing</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Test keyboard navigation (Tab, Shift+Tab, Enter)</li>
                  <li>• Try resizing window (if resizable)</li>
                  <li>• Test with different screen resolutions</li>
                  <li>• Verify window behavior when minimized/maximized</li>
                  <li>• Check form appearance on different operating systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="troubleshooting" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Bug className="h-5 w-5 text-red-600" />
              Common Issues & Solutions
            </h3>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-sm text-red-700">Form doesn't appear</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2"><strong>Possible causes:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-3">
                    <li>• Forgot to call setVisible(true)</li>
                    <li>• Window opened off-screen</li>
                    <li>• Exception in constructor</li>
                  </ul>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-sm"><strong>Solution:</strong></p>
                    <code className="text-xs">loginForm.setVisible(true);</code>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-sm text-orange-700">Components not aligned properly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2"><strong>Solutions:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use NetBeans alignment guidelines</li>
                    <li>• Check GroupLayout settings</li>
                    <li>• Ensure proper component sizing</li>
                    <li>• Use Properties panel to adjust margins</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="text-sm text-yellow-700">Window not centered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2"><strong>Check:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-3">
                    <li>• setLocationRelativeTo(null) is called</li>
                    <li>• Called after pack() or setSize()</li>
                    <li>• Called before setVisible(true)</li>
                  </ul>
                  <div className="bg-yellow-50 p-3 rounded">
                    <code className="text-xs">{`pack();
setLocationRelativeTo(null);
setVisible(true);`}</code>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-sm text-blue-700">Compilation errors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2"><strong>Common fixes:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Check import statements</li>
                    <li>• Verify variable names match</li>
                    <li>• Ensure all brackets are closed</li>
                    <li>• Check method signatures</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-gray-800 mb-2">🔧 Debug Tips</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Use System.out.println() to trace execution</li>
                  <li>• Check NetBeans Output window for errors</li>
                  <li>• Use NetBeans debugger to step through code</li>
                  <li>• Test on different Java versions if needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TestingContent;
