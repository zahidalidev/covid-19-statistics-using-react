import React, { Component } from 'react';
import "../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid'




class Table extends Component{
    raseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path){
            sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
        }else{
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };
    renderSortIcon = path => {
        const {sortColumn} = this.props;
        if(path !== sortColumn.path) return null;
        if(sortColumn.order === "asc") return <FontAwesomeIcon style={{color: "#f6ff00"}} icon={faArrowDown} />
        return <FontAwesomeIcon style={{color: "#00f2ff"}} icon={faArrowUp} />
    }
render(){    
    const {onCountries, onCountIndex} = this.props;
        return ( 
        <body style={{marginBottom: -130}} className = "table-Body-maincss">
          <div> 
              <div className="table100 ver1 m-b-110">
                <table   className="table-bordered table-hover" data-vertable="ver1">
                  <thead>
                    <tr className="row100 head">
                      {/* <th style={{border:"2px solid #2b3545", padding: 10}} className="column100 column1" data-column="column1">No.</th> */}
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("country")} className=" clickable column100 column2" data-column="column2">Country  {this.renderSortIcon("country")}</th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("cases")} className=" clickable column100 column3" data-column="column3">Cases {this.renderSortIcon("cases")}</th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("todayCases")} className=" clickable column100 column4" data-column="column4">Cases Today {this.renderSortIcon("todayCases")} </th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("deaths")} className=" clickable column100 column5" data-column="column5">Deaths {this.renderSortIcon("deaths")} </th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("todayDeaths")} className=" clickable column100 column6" data-column="column6">Deaths Today {this.renderSortIcon("todayDeaths")} </th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("recovered")} className=" clickable column100 column7" data-column="column7">Recoverd {this.renderSortIcon("recovered")} </th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("active")} className=" clickable column100 column8" data-column="column8">Active {this.renderSortIcon("active")} </th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("critical")} className=" clickable column100 column9" data-column="column9">Critical {this.renderSortIcon("critical")} </th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("casesPerOneMillion")} className=" clickable column100 column10" data-column="column10">Case Per Million {this.renderSortIcon("casesPerOneMillion")} </th>
                      <th style={{cursor: "pointer", border:"2px solid rgba(43, 53, 69, 0.7)"}} onClick = {() => this.raseSort("deathsPerOneMillion")} className=" clickable column100 column11" data-column="column11">Deaths Per Million {this.renderSortIcon("deathsPerOneMillion")} </th>
                    </tr>
                  </thead>
                  <tbody>
                  {onCountries.map(count => (
                    <tr className="row100"  key={count.country}>
                      {/* <td style={{border:"2px solid rgba(43, 53, 69, 0.7)", padding: 10}} className="column100 column1" data-column="column1">{onCountIndex(count) + 1}</td> */}
                      <th style = {{color: "white", border:"2px solid rgba(43, 53, 69, 0.7)"}} className=" hoverClass column100 column2" data-column="column2">{count.country}</th>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column3" data-column="column3">{count.cases}</td>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column4" data-column="column4">{count.todayCases}</td>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column5" data-column="column5">{count.deaths}</td>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column6" data-column="column6">{count.todayDeaths}</td>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column7" data-column="column7">{count.recovered}</td>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column8" data-column="column8">{count.active}</td>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column9" data-column="column9">{count.critical}</td>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column10" data-column="column10">{count.casesPerOneMillion}</td>
                      <td style={{border:"2px solid rgba(43, 53, 69, 0.7)"}} className="column100 column11" data-column="column11">{(count.deathsPerOneMillion) ? count.deathsPerOneMillion : 0}</td>
                    </tr>
                  ))}  
                  </tbody>
                </table>
              </div>
          </div>
      </body>
     );
    }
}
 
export default Table;