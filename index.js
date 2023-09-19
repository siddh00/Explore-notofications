const Notification = props => {
        const { message, classAttribute, imgSrc } = props;
    return (
      <div className = {classAttribute}>
        <img className="icon" src={imgSrc} />
        <p className=  >{message}</p>
      </div>
    );
}

const element = (
        <div className="bgContainer">
      <h1 className="head">Notifications</h1>
      <div className="msgContainer">
        <Notification
          message="Information Message"
          classAttribute="infoClass"
          imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification
          message="Success Message"
          classAttribute="successClass"
          imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification
          message="Warning Message"
          classAttribute="warningClass"
          imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification
          message="Error Message"
          classAttribute="errorClass"
          imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
)

ReactDOM.render(element, document.getElementById('root'))
