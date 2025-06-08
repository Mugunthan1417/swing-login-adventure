
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Grid, AlignLeft, Code } from 'lucide-react';

const LayoutSetupContent = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="grouplayout" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="grouplayout">GroupLayout</TabsTrigger>
          <TabsTrigger value="gridbaglayout">GridBagLayout</TabsTrigger>
          <TabsTrigger value="code">Layout Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="grouplayout" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Grid className="h-5 w-5 text-blue-600" />
                Using GroupLayout (Recommended)
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <div>
                    <p className="font-medium">Right-click Form Background</p>
                    <p className="text-sm text-gray-600">In Design view, right-click empty area</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <div>
                    <p className="font-medium">Set Layout → Group Layout</p>
                    <p className="text-sm text-gray-600">Choose "Set Layout" → "Group Layout" (default)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <div>
                    <p className="font-medium">Arrange Components</p>
                    <p className="text-sm text-gray-600">Drag components to desired positions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <div>
                    <p className="font-medium">Use Guidelines</p>
                    <p className="text-sm text-gray-600">NetBeans shows alignment guidelines automatically</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <AlignLeft className="h-4 w-4" />
                  GroupLayout Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Visual design with guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Automatic component alignment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Responsive to window resizing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Generated code maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-yellow-800 mb-2">📐 Alignment Tips</h4>
              <div className="text-sm text-yellow-700 space-y-1">
                <p>• <strong>Horizontal Alignment:</strong> Align labels and fields vertically</p>
                <p>• <strong>Vertical Spacing:</strong> Use consistent gaps between components</p>
                <p>• <strong>Component Sizing:</strong> Make text fields same width</p>
                <p>• <strong>Button Placement:</strong> Center or right-align the login button</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="gridbaglayout" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Grid className="h-5 w-5 text-purple-600" />
              Alternative: GridBagLayout
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <div>
                    <p className="font-medium">Change Layout Manager</p>
                    <p className="text-sm text-gray-600">Right-click form → Set Layout → Grid Bag Layout</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <div>
                    <p className="font-medium">Position Components</p>
                    <p className="text-sm text-gray-600">Drag components to grid positions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <div>
                    <p className="font-medium">Customize Properties</p>
                    <p className="text-sm text-gray-600">Right-click component → Customize to set constraints</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-sm">Grid Positioning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="bg-white p-2 text-center border">Title</div>
                    <div className="bg-gray-100 p-2 text-center border">-</div>
                    <div className="bg-gray-100 p-2 text-center border">-</div>
                    <div className="bg-white p-2 text-center border">User:</div>
                    <div className="bg-white p-2 text-center border">[Field]</div>
                    <div className="bg-gray-100 p-2 text-center border">-</div>
                    <div className="bg-white p-2 text-center border">Pass:</div>
                    <div className="bg-white p-2 text-center border">[Field]</div>
                    <div className="bg-gray-100 p-2 text-center border">-</div>
                    <div className="bg-gray-100 p-2 text-center border">-</div>
                    <div className="bg-white p-2 text-center border">Button</div>
                    <div className="bg-gray-100 p-2 text-center border">-</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Generated Layout Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// GroupLayout example for login form
GroupLayout layout = new GroupLayout(getContentPane());
getContentPane().setLayout(layout);

layout.setHorizontalGroup(
    layout.createParallelGroup(GroupLayout.Alignment.LEADING)
    .addGroup(layout.createSequentialGroup()
        .addGap(50, 50, 50)
        .addGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING)
            .addComponent(titleLabel, GroupLayout.Alignment.CENTER)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING)
                    .addComponent(usernameLabel)
                    .addComponent(passwordLabel))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING, false)
                    .addComponent(usernameField)
                    .addComponent(passwordField, GroupLayout.DEFAULT_SIZE, 150, Short.MAX_VALUE)))
            .addComponent(loginButton, GroupLayout.Alignment.CENTER))
        .addGap(50, 50, 50))
);

layout.setVerticalGroup(
    layout.createParallelGroup(GroupLayout.Alignment.LEADING)
    .addGroup(layout.createSequentialGroup()
        .addGap(30, 30, 30)
        .addComponent(titleLabel)
        .addGap(30, 30, 30)
        .addGroup(layout.createParallelGroup(GroupLayout.Alignment.BASELINE)
            .addComponent(usernameLabel)
            .addComponent(usernameField, GroupLayout.PREFERRED_SIZE, GroupLayout.DEFAULT_SIZE, GroupLayout.PREFERRED_SIZE))
        .addGap(18, 18, 18)
        .addGroup(layout.createParallelGroup(GroupLayout.Alignment.BASELINE)
            .addComponent(passwordLabel)
            .addComponent(passwordField, GroupLayout.PREFERRED_SIZE, GroupLayout.DEFAULT_SIZE, GroupLayout.PREFERRED_SIZE))
        .addGap(30, 30, 30)
        .addComponent(loginButton)
        .addGap(30, 30, 30))
);`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LayoutSetupContent;
