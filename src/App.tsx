import React from 'react';
import DynamicForm from './components/DynamicForm';
import formConfig from './data/formConfig.json';
import { FieldConfig } from './types/FieldConfig';
import './App.css';

const typedFormConfig: FieldConfig[] = formConfig as FieldConfig[];

const App: React.FC = () => (
    <div className="App">
        <DynamicForm fields={typedFormConfig} />
    </div>
);

export default App;
