
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FolderPlus, Settings, Code } from 'lucide-react';

const ProjectSetupContent = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="instructions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="instructions">Step-by-Step</TabsTrigger>
          <TabsTrigger value="code">Code Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="instructions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Instructions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FolderPlus className="h-5 w-5 text-blue-600" />
                Creating Your Project
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <div>
                    <p className="font-medium">Open NetBeans IDE</p>
                    <p className="text-sm text-gray-600">Launch NetBeans IDE 8.0 or later version</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <div>
                    <p className="font-medium">Create New Project</p>
                    <p className="text-sm text-gray-600">Go to File → New Project (Ctrl+Shift+N)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <div>
                    <p className="font-medium">Select Java Application</p>
                    <p className="text-sm text-gray-600">Choose Categories: Java → Projects: Java Application</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <div>
                    <p className="font-medium">Configure Project</p>
                    <p className="text-sm text-gray-600">
                      Project Name: "LoginFormApp"<br/>
                      Location: Choose your workspace<br/>
                      ✓ Create Main Class
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Guide */}
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Project Structure Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded border font-mono text-sm">
                  <div className="text-blue-600">📁 LoginFormApp/</div>
                  <div className="ml-4">
                    <div>📁 src/</div>
                    <div className="ml-4">
                      <div>📁 loginformapp/</div>
                      <div className="ml-4">
                        <div>📄 LoginFormApp.java</div>
                        <div className="text-gray-500">📄 LoginForm.java (we'll create this)</div>
                      </div>
                    </div>
                    <div>📁 build/</div>
                    <div>📁 dist/</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tips</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Use meaningful project names for better organization</li>
                <li>• Choose a dedicated workspace folder for your Java projects</li>
                <li>• Always create the main class for console testing</li>
                <li>• Ensure you have JDK 8 or later installed</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Generated Main Class
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`package loginformapp;

/**
 * Main class for Login Form Application
 * This will serve as the entry point for our application
 */
public class LoginFormApp {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO: Launch the login form
        System.out.println("Login Form Application Starting...");
        
        // We'll add code here to show our login form
        // after we create the JFrame in the next step
    }
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectSetupContent;
