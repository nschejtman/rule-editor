import * as React from 'react';
import Editor from "@monaco-editor/react";
import {useDispatch, useSelector} from "react-redux";
import {updateSource as updateRuleSource, ruleSourceSelector} from "../state/Rule";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`rule-tabpanel-${index}`}
            aria-labelledby={`rule-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function RuleEditor(props) {
  const dispatch = useDispatch();

  const raw = useSelector(ruleSourceSelector)

  const updateSource = (value) => dispatch(updateRuleSource(value));

    function allTabProps(index) {
        return {
            id: `rule-tab-${index}`,
            'aria-controls': `rule-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Source" {...allTabProps(0)} />
                    <Tab label="Rego" {...allTabProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Editor
                    height="100vh"
                    defaultLanguage="yaml"
                    defaultValue={raw}
                    onChange={updateSource}
                    options={{
                        minimap: {
                            enabled: false,
                        },
                    }}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Editor
                    height="100vh"
                    defaultLanguage="yaml"
                    defaultValue={raw}
                    options={{
                        minimap: {
                            enabled: false,
                        },
                        readOnly: true
                    }}
                />
            </TabPanel>
        </Box>
    );
}

export default RuleEditor;
