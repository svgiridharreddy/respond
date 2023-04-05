import { getCustomers } from "./customerService";

const customerGroupData = {
    customerGroup: "group1",
    phase3RefNo: "asdf233",
    cohortName: "asdf",
    indigoRevNo: "asdf",
    custTreatmentStart: "asdf",
    dtrReason: {
        selectedValue: "Feature1",
        options: [
                  {optionName: "Features",subOptions: ["Feature 1","Feature 2"]},
                  {optionName: "Courses",subOptions: ["Course 1","Course 2"]}
                ]
    } ,
    dtrOverallOutcome: "adf",
    ccOverallOutcome: "asdf",
    productDocStatus: "adf",
    salesChannel: "adsf",
    loggedBy: "asdf",
    modifiedBy: "asdf",
    doneBy: "adsf",
    ownedBy: "asdf",
    aitNotes: "asdf",
    reference: "",
    recieptDate: "asdf",
    age: "asdf",
    customer: getCustomers(),
    product: [{id: 1, name: "product1",policyNumber: "13344"},{id: 2,name: "product2",policyNumber: "43413"}]
}


export function getCustomerGroupData(){
  return customerGroupData;
}