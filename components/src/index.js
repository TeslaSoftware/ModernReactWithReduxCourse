import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
	return (		
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					timeAgo="Today at 4:45PM" 
					avatar={faker.image.avatar()} 
					comment={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					timeAgo="Today at 2:03AM" 
					avatar={faker.image.avatar()} 
					comment={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					timeAgo="Yesterday at 7:51PM" 
					avatar={faker.image.avatar()} 
					comment={faker.lorem.sentence()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
