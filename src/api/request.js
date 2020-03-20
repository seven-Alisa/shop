import axios from 'axios';
import qs from 'qs';
import { Indicator } from 'mint-ui';


//1.请求之前
 axios.interceptors.request.use(function (config) {
//    console.log("a")
      Indicator.open({
	  text: '加载中...',
	  spinnerType: 'fading-circle'
	});
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });
    
//3.请求之后   
 axios.interceptors.response.use(function (response) {
//    console.log("b")
      Indicator.close();
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
   });


//2.
const axiosGet = (url,params)=>{
	return new Promise((resolve,reject)=>{
		//根据url和参数请求数据，请求成功就resolve(),失败reject()
		axios.get(url,{params:params})
		.then((res)=>{
			resolve(res.data);//请求成功就resolve(),执行下一步
		})
		.catch((err)=>{
			reject(err)
		})
	})
}


const axiosPost = (url,params)=>{
	return new Promise((resolve,reject)=>{
		//根据url和参数请求数据，请求成功就resolve(),失败reject()
		params = qs.stringify(params);//对象转字符串
		axios.post(url,{params:params})
		.then((res)=>{
			resolve(res.data);
		})
		.catch((err)=>{
			reject(err)
		})
	})
}


export default{
	get:axiosGet,
	post:axiosPost
}
