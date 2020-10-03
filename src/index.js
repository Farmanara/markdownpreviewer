import React from "react";
import ReactDOM from 'react-dom';
import marked from 'marked';
import '../src/index.css'

const defaultInput = `
# Markdown Previewer

            

## Use the left text area to write in Markdown
            

#### This is an \`inline code\` written within h4 text

\`\`\`
This is 
a block 
of code

\`\`\`

### The list :

+ listItem1
+ listItem2



Block quote:


> this is supposed to be a block quote !



**Visit the challenge in link below:**


            
[Challenge Link](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)


and the image:


![Minion](https://res.cloudinary.com/teepublic/image/private/s--HAkw1SOt--/c_crop,x_10,y_10/c_fit,h_646/c_crop,g_north_west,h_734,w_1004,x_-108,y_-44/l_upload:v1466701074:production:blanks:ibu6swrzxdis4kiazjnn/fl_layer_apply,g_north_west,x_-239,y_-297/b_rgb:191919/c_limit,f_jpg,h_630,q_90,w_630/v1483940446/production/designs/1076631_1.jpg) `

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            
            input:defaultInput


        }

        this.handleChange=this.handleChange.bind(this);
    }
    

    handleChange(event){
        this.setState({input:event.target.value})

    }

    render() {
    return( <div className="container">
            <textarea id="editor" className="item" value={this.state.input} onChange={this.handleChange}></textarea>
            <div id="preview" className="item" dangerouslySetInnerHTML = {{ __html: marked(this.state.input) }}></div> 

        </div>)
}
}
ReactDOM.render(<App/>,document.getElementById('root'))