import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import DataObjectIcon from '@mui/icons-material/DataObject';

const routes =  {
    "Resume" : ["/resume/", <WorkHistoryIcon />],
    "Education" : ["/education/", <SchoolIcon />],
    "Skills" : ["/skills/", <DataObjectIcon />],
    "HomePage": ["/"],
};

export default routes;