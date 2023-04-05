const customers = [
    {
      id: 1,
      customer: "group2",
      title: "",
      firstName: "Giridhar",
      surname: "Reddy",
      cinBin: "",
      recieptDate: "",
      dob: "2002/10/07",
      deceasedDate: "",
      addUpdtOnbyCust: "",
      contactType: "Trust",
      companyName: "Natwest",
      addressLine1: "WMCM+V8F,",
      addressLine2: "Adarsh Palm Retreat",
      addressLine3: "Bellandur",
      addressLine4: "Bengaluru",
      addressLine5: "Karnataka",
      postCode: "560103",
      homePhone: "80989001212",
      mobilePhone: "80989001212",
      workPhone: "80989001212",
      officePhone: "80989001212",
      createdBy: "",
      lastModifiedBy: "",
      insolvency: "",
      overseas: "",
      includeInComms: "",
      customerSituation: "",
      bankNonbank: ""
    },
    {
      id: 2,
      customer: "",
      title: "",
      firstName: "Shoaib",
      surname: "",
      cinBin: "",
      recieptDate: "",
      dob: "",
      deceasedDate: "",
      addUpdtOnbyCust: "",
      contactType: "Trust",
      companyName: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      addressLine4: "",
      addressLine5: "",
      postCode: "",
      homePhone: "",
      mobilePhone: "",
      workPhone: "",
      officePhone: "",
      createdBy: "",
      lastModifiedBy: "",
      insolvency: "",
      overseas: "",
      includeInComms: "",
      customerSituation: "",
      bankNonbank: ""
    },
    {
      id: 3,
      customer: "",
      title: "",
      firstName: "Kola",
      surname: "",
      cinBin: "",
      recieptDate: "",
      dob: "",
      deceasedDate: "",
      addUpdtOnbyCust: "",
      contactType: "Trustee",
      companyName: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      addressLine4: "",
      addressLine5: "",
      postCode: "",
      homePhone: "",
      mobilePhone: "",
      workPhone: "",
      officePhone: "",
      createdBy: "",
      lastModifiedBy: "",
      insolvency: "",
      overseas: "",
      includeInComms: "",
      customerSituation: "",
      bankNonbank: ""
    }
  ]

  export function getCustomers() {
    return customers;
  }

  export function getCustomer(customerId){
    const customer = customers.find(customer => customer.id === customerId)
    return customer;
  }

  export function updateCusotmer(c) {
    const customer = customers.find(customer => customer.id === c.id)
    customer.firstName = c.firstName
    customer.contactType = c.contactType
    return customer;
  }

  export function deleteCustomer(customerId){
    return customers.filter(c => c.id !== customerId)
  }

