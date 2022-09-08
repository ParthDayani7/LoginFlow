import {useQuery} from 'react-query';
function Component() {
	// Fetcher function
	const getFacts = async () => {
		const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('randomFacts', getFacts);
	// Error and Loading states
	/*if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;*/
	// Show the response if everything is fine
	return (
		<div>
			<Text>{data.randomFact}</Text>
		</div>
	);
}