import { useEffect, useState } from "react";

function Result({ arr }) {
	const [time,setTime] = useState()

	const quickSort = (arr) => {
		if (arr.length <= 1){
			return arr;
		}
	
		const pivot = arr[0];
		const left = [];
		const right = [];
	
		for (let i=1; i<arr.length; i++){
			if(pivot>arr[i]){
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		return quickSort(left).concat(pivot, quickSort(right)); 
	}

	const timeout = () => {
		setTimeout(() => {
			return setTime(quickSort(arr).reverse().join())
		}, 3000);
	}

	useEffect(()=> {
		timeout()
	})


  return (
		<>
			<div> 결과 오름차순 : {quickSort(arr).join()} </div>
			<div> 결과 내림차순 : {time} </div>
		</>
  );
}

export default Result;
