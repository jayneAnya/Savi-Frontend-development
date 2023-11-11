export const StorageKeys = {
    TOKEN: "token",
    SUCCESS: "success",
    USERID: "userId",
};

export const QueryPaths = {
    LOGIN: "/api/Auth/login",
    SIGNUP: "/api/Auth/SignUp",
    INDENTITY: "/api/KYC/identitytypes",
    GETUSER: `/api/UserProfile`,
    FORGOTPASSWORD: "/api/Auth/ForgotPassword",
    VERIFYPAYMENT: "/payment/verify",
    CREATEGROUP: "/api/GroupSavings/create/groupsavings",
    CREATETARGET: "/api/SetTarget",
    GETTARGET: "/api/SetTarget",
    GETGROUP: "/api/GroupSavings/get/list/groupsavings",
    GETWALLET: "/api/Wallet/user",
    SETTARGET: "/api/SetTarget",
    GETUSERTARGET: "/api/SetTarget/user",
    GETGROUPBYID: "/api/GroupSavings/get/groupby",
    UPLOADIMGTOCLOUD: "/api/ImageUpload",
    JOINGROUP: "/api/GroupSavings/join/groupsavings",
    GETUSERGROUPS: "/api/GroupSavings/get/list-of-all-groupsavings-created-by-user",
    OCCUPATION: "/api/KYC/occupations",
    
}