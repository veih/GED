class NovoResponsavel extends Component {
    render(){
      const responsavel = this.props.responsavel;
  
      return (
         <div>
           Responsavel <input type="text" defaultValue={responsavel.Nome} />
          </div>   
      );
     }
  }
  
  class NovoAtendimento extends Component {
    constructor(props){
      super(props);
      this.state = {responsaveis: []};
      this.handleAdicionarResponsavel = this.handleAdicionarResponsavel.bind(this);
    }
     handleAdicionarResponsavel() {
      var responsaveis = this.state.responsaveis;
      responsaveis.push({Nome: ''});
  
      this.setState({
        responsaveis: responsaveis
      });
    }
    render(){
      const responsaveis = this.state.responsaveis.map(r=> <NovoResponsavel responsavel={r}/>);
  
      return (
        <div>
          {responsaveis}
          <ItemGrid xs={12} sm={12} md={12}>
            <a onClick={this.handleAdicionarResponsavel} className="addnew">
              adicionar outro responsável
            </a>   
            </ItemGrid>  
          </div>
      );
    }
  }

  // Routing Components
Route = Router.Route;
RouteHandler = Router.RouteHandler;
DefaultRoute = Router.DefaultRoute;

var routes = (
 <Route name="app" path="/" handler={OurSchoolsApp}>
     <DefaultRoute name="home" handler={HomePage} />
     <Route name="add-school" handler={AddSchoolPage}  />
     <Route name="calendar" handler={CalendarPage}  />
     <Route name="calendar-detail" path="calendar-detail/:id" handler={CalendarDetailPage} />
     <Route name="info-detail" path="info-detail/:id" handler={InfoDetailPage} />
     <Route name="info" handler={InfoPage} />
     <Route name="news" handler={NewsListPage} />
     <Route name="news-detail" path="news-detail/:id" handler={NewsDetailPage} />
     <Route name="contacts" handler={ContactPage} />
     <Route name="contact-detail" handler={ContactDetailPage} />
     <Route name="settings" handler={SettingsPage} />
 </Route>
 );

 Router.run(routes, function(Handler){
   var mountNode = document.getElementById('app');
   React.render(<Handler /> , mountNode);
 });

  // botão de volta

  const BrowserHistory = require('react-router/lib/BrowserHistory').default;

const App = React.createClass({
    render: () => {
        return (
            <div><button onClick={BrowserHistory.goBack}>Go Back</button></div>
        );
    }
});

React.render((
    <Router history={BrowserHistory}>
        <Route path="/" component={App} />
    </Router>
), document.body);