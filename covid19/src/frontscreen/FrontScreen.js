import React,{useState} from 'react'
import './style.css'

const FrontScreen = (props)=>{
    const [searchValue,setSearchValue] = useState('')
    const handleChange = (event)=>{
        setSearchValue(event.target.value)
    }
    const anotherList = props.dataList.filter((item,item2)=>{
       return item.state.toLowerCase().includes(searchValue.toLowerCase()) && item.state!=="Total"
    })
    return (
        <>
        <div class="logo">Covid Tracker</div>
        <input type="text" placeholder="Search" value={searchValue} onChange={handleChange} class="search-box"/>
        <table class="table table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">State</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Active</th>
                    <th scope="col">Last Updated</th>
                    </tr>
                </thead>
                {
                    anotherList.map((item,item2)=>{
                        return (
                            <tr>
                             <td>{item.state}</td>
                             <td>{item.confirmed}</td>
                             <td>{item.recovered}</td>
                             <td>{item.deaths}</td>
                             <td>{item.active}</td>
                             <td>{item.lastupdatedtime}</td>
                            </tr>
                        )
                    })
                }
        </table>
        </>
    )
}

export default FrontScreen