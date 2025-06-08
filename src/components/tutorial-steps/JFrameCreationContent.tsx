import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Plus, Code } from 'lucide-react';

const JFrameCreationContent = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="instructions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="instructions">Step-by-Step</TabsTrigger>
          <TabsTrigger value="code">Generated Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="instructions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Monitor className="h-5 w-5 text-blue-600" />
                Adding JFrame Form
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <div>
                    <p className="font-medium">Right-click Source Package</p>
                    <p className="text-sm text-gray-600">In Projects panel, right-click on "loginformapp" package</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <div>
                    <p className="font-medium">New → JFrame Form</p>
                    <p className="text-sm text-gray-600">Select New → JFrame Form from context menu</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <div>
                    <p className="font-medium">Name Your Form</p>
                    <p className="text-sm text-gray-600">
                      Class Name: "LoginForm"<br/>
                      Package: loginformapp (auto-filled)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <div>
                    <p className="font-medium">Design View Opens</p>
                    <p className="text-sm text-gray-600">NetBeans opens the visual designer with empty JFrame</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Visual Designer Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border-2 border-dashed border-gray-300 p-8 rounded text-center">
                  <div className="text-gray-400 mb-4">
                    <Monitor className="h-12 w-12 mx-auto" />
                  </div>
                  <p className="text-gray-600 text-sm">Empty JFrame Canvas</p>
                  <p className="text-xs text-gray-500 mt-2">
                    This is where you'll design your login form
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-blue-800 mb-2">🎯 What You'll See</h4>
              <div className="text-sm text-blue-700 space-y-2">
                <p><strong>Design View:</strong> Visual form designer with drag-and-drop capability</p>
                <p><strong>Source View:</strong> Generated Java code (click Source tab to view)</p>
                <p><strong>Palette:</strong> Components panel on the right with UI elements</p>
                <p><strong>Properties:</strong> Component properties panel for customization</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Auto-Generated JFrame Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`package loginformapp;

/**
 * Login Form - JFrame for user authentication
 */
public class LoginForm extends javax.swing.JFrame {

    /**
     * Creates new form LoginForm
     */
    public LoginForm() {
        initComponents();
    }

    /**
     * This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">
    private void initComponents() {

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 400, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 300, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new LoginForm().setVisible(true);
            }
        });
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

export default JFrameCreationContent;
