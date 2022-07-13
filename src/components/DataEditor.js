import Editor from "@monaco-editor/react";
import {useDispatch, useSelector} from "react-redux";
import {updateSource as updateDataSource, dataSourceSelector, dataResolvedSelector} from "../state/Data";
import Box from "@mui/material/Box";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`data-tabpanel-${index}`}
          aria-labelledby={`data-tab-${index}`}
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


function DataEditor(props) {
  const dispatch = useDispatch();

  const source = useSelector(dataSourceSelector)
  const resolved = useSelector(dataResolvedSelector)

  const updateSource = (value) => dispatch(updateDataSource(value));

  function allTabProps(index) {
    return {
      id: `data-tab-${index}`,
      'aria-controls': `data-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Source" {...allTabProps(0)} />
            <Tab label="Model" {...allTabProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Editor
              height="100vh"
              defaultLanguage="yaml"
              defaultValue={source}
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
              defaultLanguage="json"
              defaultValue={resolved}
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

export default DataEditor;
