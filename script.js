function showPopup(department) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-title').innerText = department;
    document.getElementById('popup-body').innerHTML = getDepartmentInfo(department);
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

function getDepartmentInfo(department) {
    // Here you can define detailed information for each department
    var info = {
        'UK Government': `
            <p>The UK Government retains significant authority over Northern Ireland, particularly in areas known as "reserved" and "excepted" matters. Reserved matters are areas where the UK Parliament has decided to retain control but can transfer powers to the Northern Ireland Assembly in the future. These include policing and criminal law. Excepted matters, however, are areas that the UK Parliament has decided to retain control over indefinitely, such as defense, foreign affairs, and immigration.</p>
            <p>The UK Government's role in Northern Ireland also involves providing financial support through the block grant, which is determined by the Barnett formula. This grant is crucial for funding devolved services in Northern Ireland. Additionally, the UK Government can intervene in Northern Ireland under certain circumstances, such as if the devolved institutions are not functioning properly or in response to security concerns.</p>
            <p>The Secretary of State for Northern Ireland, a UK government minister, plays a key role in overseeing Northern Ireland affairs and ensuring the implementation of devolved governance. This complex arrangement aims to balance local self-governance with the overarching sovereignty and responsibilities of the UK Government.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>Current Prime Minister</h3>
                    <img src="Pm_photo.jpeg" alt="Current Prime Minister" style="width:100px;height:auto;">
                </div>
                <div style="text-align: center;">
                    <h3>NI Secretary of State</h3>
                    <img src="Ni_sec_photo.jpeg" alt="NI Secretary of State" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.gov.uk/government/organisations/uk-government" target="_blank">UK Gov</a></p>
            <p><a href="https://www.gov.uk/government/organisations/northern-ireland-office" target="_blank">NI Gov Office</a></p>
            `,
            'NI Executive': `
            <p>The Northern Ireland Executive is the devolved government of Northern Ireland. It is responsible for most local matters and operates under the framework of devolution established by the Belfast Agreement. The Executive is made up of ministers from the main political parties in Northern Ireland, reflecting the power-sharing arrangement.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>First Minister</h3>
                    <img src="first_min.jpeg" alt="First Minister" style="width:100px;height:auto;">
                </div>
                <div style="text-align: center;">
                    <h3>Deputy First Minister</h3>
                    <img src="dep_first_min.jpeg" alt="Deputy First Minister" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.northernireland.gov.uk/" target="_blank">NI Executive</a></p>
        `,
        'Department of Health': `
            <p>The Department of Health (DoH) is responsible for health and social care policy in Northern Ireland. It oversees the Health and Social Care (HSC) system, ensuring the delivery of high-quality health and social services.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>Health Minister</h3>
                    <img src="health_min.jpeg" alt="Health Minister" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.health-ni.gov.uk/" target="_blank">Department of Health</a></p>
        `,
        'Health and Social Care Board': `
            <p>The Health and Social Care Board (HSCB) is responsible for commissioning health and social care services for the population of Northern Ireland. It works with various health trusts to ensure services meet the needs of the community.</p>
            <p><a href="http://www.hscboard.hscni.net/" target="_blank">Health and Social Care Board</a></p>
        `,
        'Belfast Health and Social Care Trust': `
            <p>The Belfast Health and Social Care Trust provides a range of health and social care services to the Belfast area. It is one of the largest integrated health and social care trusts in the United Kingdom.</p>
            <p><a href="http://www.belfasttrust.hscni.net/" target="_blank">Belfast Health and Social Care Trust</a></p>
        `,
        'Department for the Economy': `
            <p>The Department for the Economy (DfE) is responsible for economic policy, employment and skills, further and higher education, energy, and tourism in Northern Ireland.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>Economy Minister</h3>
                    <img src="dep_econ_min.jpeg alt="Economy Minister" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.economy-ni.gov.uk/" target="_blank">Department for the Economy</a></p>
        `,
        'Invest NI': `
            <p>Invest NI is Northern Ireland's regional economic development agency. It supports businesses to compete internationally and attract new investment to Northern Ireland.</p>
            <p><a href="https://www.investni.com/" target="_blank">Invest NI</a></p>
        `,
        'Department of Education': `
            <p>The Department of Education (DE) is responsible for education policy in Northern Ireland. It oversees the administration of primary, secondary, and special education, and the promotion of educational excellence.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>Education Minister</h3>
                    <img src="dep_educ_min.jpeg" alt="Education Minister" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.education-ni.gov.uk/" target="_blank">Department of Education</a></p>
        `,
        'Education Authority': `
            <p>The Education Authority (EA) is responsible for delivering education services across Northern Ireland. It supports schools in providing high-quality education to children and young people.</p>
            <p><a href="https://www.eani.org.uk/" target="_blank">Education Authority</a></p>
        `,
        'Belfast Education Authority': `
            <p>The Belfast Education Authority is a regional office of the Education Authority, focusing on the specific educational needs of the Belfast area.</p>
            <p><a href="https://www.eani.org.uk/about-us/our-regional-offices/belfast-regional-office" target="_blank">Belfast Education Authority</a></p>
        `,
        'Department of Communities': `
            <p>The Department for Communities (DfC) is responsible for housing, social welfare, sport, culture, and community development in Northern Ireland.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>Communities Minister</h3>
                    <img src="dep_comm_min.jpeg alt="Communities Minister" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.communities-ni.gov.uk/" target="_blank">Department of Communities</a></p>
        `,
        'Child Maintenance Service': `
            <p>The Child Maintenance Service is part of the Department for Communities and is responsible for ensuring that child maintenance is paid to support children in separated families.</p>
            <p><a href="https://www.nidirect.gov.uk/articles/child-maintenance-service" target="_blank">Child Maintenance Service</a></p>
        `,
        'Jobs and Benefits Offices': `
            <p>Jobs and Benefits Offices provide a range of services to help people find employment and access benefits.</p>
            <p><a href="https://www.nidirect.gov.uk/contacts/jobs-benefits-offices" target="_blank">Jobs and Benefits Offices</a></p>
        `,
        'Department of Finance': `
            <p>The Department of Finance (DoF) is responsible for the budgetary and financial management of the Northern Ireland Executive. It also oversees public sector procurement and ICT services.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>Finance Minister</h3>
                    <img src="dep_fin_min.jpeg" alt="Finance Minister" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.finance-ni.gov.uk/" target="_blank">Department of Finance</a></p>
        `,
        'NI Statistics and Research Agency': `
            <p>The Northern Ireland Statistics and Research Agency (NISRA) provides statistical and research information to inform policy development and public understanding.</p>
            <p><a href="https://www.nisra.gov.uk/" target="_blank">NI Statistics and Research Agency</a></p>
        `,
        'Department of Justice': `
            <p>The Department of Justice (DoJ) is responsible for criminal justice policy, law and order, and supporting the judicial system in Northern Ireland.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>Justice Minister</h3>
                    <img src="dep_justice_min.jpeg alt="Justice Minister" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.justice-ni.gov.uk/" target="_blank">Department of Justice</a></p>
        `,
        'NI Prison Service': `
            <p>The Northern Ireland Prison Service (NIPS) is responsible for the management and rehabilitation of prisoners in Northern Ireland.</p>
            <p><a href="https://www.justice-ni.gov.uk/topics/prisons" target="_blank">NI Prison Service</a></p>
        `,
        'Belfast City Council': `
            <p>Belfast City Council is the local authority with responsibility for the city of Belfast. It oversees local services such as waste management, parks, and community services.</p>
            <div style="display: flex; align-items: center;">
                <div style="text-align: center; margin-right: 10px;">
                    <h3>Mayor of Belfast</h3>
                    <img src="mayor.jpeg" alt="Mayor of Belfast" style="width:100px;height:auto;">
                </div>
            </div>
            <p><a href="https://www.belfastcity.gov.uk/" target="_blank">Belfast City Council</a></p>
        `,
        'City Growth and Regeneration Committee': `
            <p>The City Growth and Regeneration Committee is responsible for economic development and regeneration projects within Belfast.</p>
            <p><a href="https://www.belfastcity.gov.uk/council/committees/city-growth-and-regeneration-committee" target="_blank">City Growth and Regeneration Committee</a></p>
        `,
        'People and Communities Committee': `
            <p>The People and Communities Committee focuses on social and community services, including housing, health, and leisure services in Belfast.</p>
            <p><a href="https://www.belfastcity.gov.uk/council/committees/people-and-communities-committee" target="_blank">People and Communities Committee</a></p>
        `,
        'Planning Committee': `
            <p>The Planning Committee oversees urban planning and development control within Belfast.</p>
            <p><a href="https://www.belfastcity.gov.uk/council/committees/planning-committee" target="_blank">Planning Committee</a></p>
        `,
        'Strategic Policy and Resource Committee': `
            <p>The Strategic Policy and Resource Committee sets the strategic direction and oversees resource allocation for Belfast City Council.</p>
            <p><a href="https://www.belfastcity.gov.uk/council/committees/strategic-policy-and-resources-committee" target="_blank">Strategic Policy and Resource Committee</a></p>
        `
    };

    return info[department] || '<p>No information available.</p>';
}
