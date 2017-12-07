import React from 'react';
import { render } from 'react-dom';


const data = [
  {
    id: '1',
    title: 'SapientNitro',
    description: 'I used to work at SapientNitro.',
    url: 'https://placeimg.com/150/150/nature/sepia'
  },
  {
    id: '2',
    title: 'Razorfish',
    description: 'SapientNitro merged with Razorfish.',
    url: 'https://placeimg.com/150/150/animals/sepia'
  },
  {
    id: '3',
    title: 'SapientRazorfish',
    description: 'Now I work at SapientRazorfish.',
    url: 'https://placeimg.com/150/150/tech/sepia'
  },
];

class ProjectData extends React.Component {
  // this is state with an emput project nothing in the active project nothing for the title and nothing for the description 
  state = {
    projects: [],
    activeProject: '',
    modalTitle: '',
    modalDescription: ''
  }
// project data will be updated with teh data 
  componentDidMount() {
    this.setState({ projects: data });
  }
// when this function is called the index that is chosen for the active project, projects was updated so now we are able to access the index of the title for the data and description 
  handleModalOpen = (idx) => {
    this.setState({
      activeProject: idx,
      modalTitle: this.state.projects[idx].title,
      modalDescription: this.state.projects[idx].description
    });  
  };
// this closes all projects 
  handleModalClose = () => {
    this.setState({
      activeProject: ''
    });  
  };
// this looks at all the projects there are
// this then looks at the active project and goes forwar
// then it divides project by the number of iterms there are 
// does the same as if you opened byt on the specifc project you just called next on 
  handleNextProject = () => {
    
    var arr = this.state.projects.length;
    var idx = this.state.activeProject + 1;
    var idx = idx % arr;
    
    this.setState({
      activeProject: idx,
      modalTitle: this.state.projects[idx].title,
      modalDescription: this.state.projects[idx].description
    }); 
  }

  handlePrevProject = () => {
    var arr = this.state.projects.length;
    var idx = this.state.activeProject;
    
    console.log('initial: ' + idx);
    
    if (idx === 0) {
      var idx = arr - 1;
    } else {
      var idx = idx -1;
    }
    
    console.log('updated: ' + idx);
    
    this.setState({
      activeProject: idx,
      modalTitle: this.state.projects[idx].title,
      modalDescription: this.state.projects[idx].description
    });  
  }

  render() {
    
    console.log(this.state)
    
    function nextTitle(idx, arr) {
      var i = idx + 1;
      var i = i % arr.length;
      return arr[i].title;
    }
    
    function prevTitle(idx, arr) {
      
      if (idx === 0) {
        var i = arr.length -1;
      } else {
        var i = idx -1;
      }
      
      return arr[i].title;
    }

    const projectComponents = data.map((data, idx, arr) =>
      <Project
        key={'project-' + data.id}
        index={idx}
        title={data.title}
        url={data.url}
        onModalOpen={this.handleModalOpen}
      />,
    );
 //if item is showing nothing then this is what you should see otherwise we need to see the next item 
    if(this.state.activeProject === '') {
      return (
        <div>
          <h3>Click on a project below to view details.</h3>
          {projectComponents}
        </div>
      );
    } else {
      return (
        <div>
          <Modal 
            title={this.state.modalTitle}
            description={this.state.modalDescription}
            previousTitle={prevTitle(this.state.activeProject, data)}
            nextTitle={nextTitle(this.state.activeProject, data)}
            onModalClose={this.handleModalClose}
            onNext={this.handleNextProject}
            onPrev={this.handlePrevProject}
          />
        </div>
      );
    }
  }
}



render(<ProjectData />, document.getElementById('root'));
