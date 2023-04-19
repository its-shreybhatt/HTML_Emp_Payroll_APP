window.addEventListener('DOMContentLoaded',event=>{
    createInnerHtml();
});

const createInnerHtml=()=>{
    const headerHtml="<th>Profile</th> <th>Name</th> <th>Gender</th> <th>Department</th>"+
                 "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
    if(empPayrollList.length ==0) return;
    let innerHtml=`${headerHtml}`;
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${stringifyDate(empPayrollData._startDate)}</td>
            <td>
                <img id="${empPayrollData._id}" onclick="remove(this)"  src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img id="${empPayrollData._id}" onclick="update(this)"  src="../assets/icons/create-black-18dp.svg" alt="edit" >
            </td>
        </tr>
        `;
    }
    document.querySelector(`#table-display`).innerHTML=innerHtml;
}

const createEmployeePayrollJSON=()=>{
    let employeePayrollList=[
        {
            _name:'Shrey Bhatt',
            _gender:'male',
            _department:[
                'Engineer',
                'HR',
                'Sales'
            ],
            _salary:'460000',
            _startDate:'29 May 2021',
            _note:'Hi all',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -2.png'
        },
        {
            _name:'Kartikeya Maan',
            _gender:'Male',
            _department:[
                'Engineer',
                'Finance'
            ],
            _salary:'350000',
            _startDate:'12 October 2020',
            _note:'HELLO',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -3.png'
        },
    ];
    return employeePayrollList;
}

const getDeptHtml=(deptList)=>{
    let deptHtml='';
    for(const dept of deptList){
        deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textCentent= employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('employeePayrollList')? JSON.parse(localStorage.getItem('employeePayrollList')) : [];
}