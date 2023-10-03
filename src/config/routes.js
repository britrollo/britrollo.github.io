import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import DataObjectIcon from '@mui/icons-material/DataObject';
import HomeIcon from '@mui/icons-material/Home';

const routes =  {
    "": {
        "path": "/",
        "icon": <HomeIcon />
    },
    "Career" : {
        "path": "/career/", 
        "icon": <WorkHistoryIcon />,
    },
    "Education" : {
        "path": "/education/", 
        "icon": <SchoolIcon />
    },
    "Skills" : {
        "path": "/skills/", 
        "icon": <DataObjectIcon />
    },
};

export default routes;