       case -1:
                            this.title = "Done!",
                            this.message = "Your data has been successfully saved!",
                            this.icon = "success.svg";
                            break;
                        case -2:
                            this.title = "Please wait",
                            this.message = "Please wait while we get your data",
                            this.icon = "wait.svg";
                            break;
                        case -3:
                            this.title = "Saving",
                            this.message = "Please wait while the new client is added",
                            this.icon = "wait.svg";
                            break;
                        case -4:
                            this.title = "Error",
                            this.message = "Please enter and save all the required fields before generating the template",
                            this.icon = "wait.svg";
                            break;
                        case -5:
                            this.title = "Saving",
                            this.message = "Please wait while your data is saved",
                            this.icon = "wait.svg";
                            break;
                        case -6:
                            this.title = "Processing",
                            this.message = "Please wait while we process your request",
                            this.icon = "wait.svg";
                            break;
                        case -7:
                            this.title = "Missing Information",
                            this.message = "Please review and fill in all the mandatory information before saving";
                            break;
                        case -8:
                            this.title = "Done!",
                            this.message = "If you're email exists in our database, you will receive an one time password (OTP) to be able to reset your password";
                            break;
                        case -9:
                            this.title = "Nothing to save",
                            this.message = "Sorry, there are no changes to save!";
                            break;
                        case -10:
                            this.title = "Generating report",
                            this.message = "This can take a few minutes depending on the size of the data";
                            break;
                        case 1:
                            this.title = "Missing Inputs",
                            this.message = "Please ensure you've entered all the mandatory inputs and try again";
                            break;
                        case 0:
                        case 114:
                            this.title = "Ooops!",
                            this.message = "Seems like we are having trouble reaching the server. Please check your internet connection and try again";
                            break;
                        case 99:
                            this.title = "Ooops!",
                            this.message = "Something went wrong while processing the request, please try again!";
                            break;
                        case 101:
                        case 102:
                        case 103:
                        case 104:
                        case 105:
                        case 106:
                        case 115:
                        case 120:
                        case 144:
                            this.title = "Ooops!",
                            this.message = "Something went wrong while trying to perform the operation. Please try again or contact our support";
                            break;
                        case 107:
                        case 110:
                        case 112:
                        case 117:
                            this.title = "Invalid Email",
                            this.message = "Please enter the correct email address and try again";
                            break;
                        case 113:
                            this.title = "Single Sign On",
                            this.message = "Please use the SSO option to sign in";
                            break;
                        case 114:
                            this.title = "Error",
                            this.message = "Sorry, there was an error sending the email. Please try again";
                            break;
                        case 118:
                            this.title = "Sign In Failed",
                            this.message = "Please enter the correct one time password (OTP) and try again";
                            break;
                        case 119:
                        case 121:
                            this.title = "Authentication Failed",
                            this.message = "Please check your credentials and try again";
                            break;
                        case 122:
                            this.title = "Something went wrong",
                            this.message = "Please check your data and try again";
                            break;
                        case 123:
                            this.title = "Upload error",
                            this.message = "Something went wrong while uploading the file. Please check your internet connection and try again";
                            break;
                        case 124:
                            this.title = "Upload error",
                            this.message = "Looks like you've uploaded an invalid file type. Please check your file and try again";
                            break;
                        case 125:
                            this.title = "Invalid Image",
                            this.message = "Please upload a square image and try again";
                            break;
                        case 126:
                        case 111:
                            this.title = "Invalid Employee ID",
                            this.message = "Please ensure that the employee ID is unique (it cannot be changed)";
                            break;
                        case 109:
                            this.title = "Invalid Email Address",
                            this.message = "This email address belongs to another user. Please check your input and try again.";
                            break;
                        case 128:
                            this.title = "Duplicate Client",
                            this.message = "This client already exists, please check your data and try again";
                            break;
                        case 129:
                            this.title = "Invalid dates",
                            this.message = "The end date cannot be earlier than the start date";
                            break;
                        case 130:
                            this.title = "Invalid Sub-Domain",
                            this.message = "Sorry, this sub-domain is already in use. Please change it and try again";
                            break;
                        case 131:
                            this.title = "Invalid E-mail domains",
                            this.message = "Sorry, the permitted domains are already in use. Please change it and try again";
                            break;
                        case 132:
                            this.title = "Error",
                            this.message = "You need to enable atleast one type of skill rating mechanism";
                            break;
                        case 133:
                            this.title = "Error",
                            this.message = "You need to select atleast one skill category";
                            break;
                        case 134:
                            this.title = "Error",
                            this.message = "You need to have atleast one skill hierarchy level";
                            break;
                        case 135:
                            this.title = "Invalid Key",
                            this.message = "You seem to have entered an invalid key, please check and try again";
                            break;
                        case 136:
                            this.title = "Duplicate Key",
                            this.message = "Please ensure all the keys are unique try again";
                            break;
                        case 137:
                            this.title = "Missing Inputs",
                            this.message = "Please ensure you enter valid inputs for all fields and try again";
                            break;
                        case 141:
                            this.title = "Duplicate Skill Origin",
                            this.message = "This skill origin already exists, please check your data and try again";
                            break;
                        case 143:
                            this.title = "Missing Pairing",
                            this.message = "Pairing is mandatory for conditional mandatory skills";
                            break;
                        case 147:
                            this.title = "Duplicate " + this.ds.dictionary.specializations,
                            this.message = "A " + this.ds.dictionary.specializations.toLowerCase() + " with this name already exists.";
                            break;
                        case 116:
                        case 145:
                        case 146:
                        case 148:
                            this.title = "Invalid Data",
                            this.message = "There was an error performing the operation. Looks like you're providing invalid or stale data. Please refresh the page and try again";
                            break;
                        case 149:
                            this.title = "Resume Parsing Failed",
                            this.message = "Sorry we couldn't parse any skills from this file. Use a valid resume with relevant skills.";
                            break;
                        case 150:
                            this.title = "Resume Parsing Failed",
                            this.message = "Sorry, we couldn't find any skills in the uploaded file. Please re-upload a valid resume for effective scanning and extraction of skills.";
                            break;
                        case 151:
                            this.title = "No Skills Available",
                            this.message = "No skills have been configured for your organization. Please contact your HR to sort this out";
                            break;
                        case 152:
                            this.title = "Error",
                            this.message = "You need to have a minimum of 2 skill hierarchy levels. Please try again.";
                            break;
                        case 154:
                            this.title = "Error",
                            this.message = "Looks like you are trying to apply for the " + this.ds.dictionary.specializations.toLowerCase() + " again. There is an existing active application";
                            break;
                        case 155:
                            this.title = "Error",
                            this.message = "Looks like you're trying to create a duplicate " + this.ds.dictionary.specializations.toLowerCase() + " - there is an existing active " + this.ds.dictionary.specializations.toLowerCase() + ".";
                            break;
                        case 159:
                            this.title = "Error",
                            this.message = "Sorry, you've entered the wrong OTP again. Please reset your password and try again with a new OTP.";
                            break;
                        case 160:
                            this.title = "Account Blocked",
                            this.message = "Sorry, you've entered the wrong credentials too many times. Please reset your password by clicking on forgot password.";
                            break;
                        case 161:
                            this.title = "Invalid Credentials",
                            this.message = "Sorry, you've entered the invalid credentials, please check your input and try again.";
                            break;
                        case 167:
                            this.title = "Error",
                            this.message = "The first 3 elements of the skill hierarchy cannot be deleted once created. You can rename them though.";
                            break;
                        case 169:
                            this.title = "No data available",
                            this.message = "Please change the date and filters and try again";
                            break;
                        case 170:
                            this.title = "Invalid Credentials",
                            this.message = "Request could not be processed. Contact your admin for assistance";
                            break;
                        case 171:
                            this.title = "Invalid Credentials",
                            this.message = "Invalid and/ or expired credentials received";
                            break;
                        case 172:
                            this.title = "Request Sent",
                            this.message = "Your request has been sent to admin for review and approval",
                            this.icon = "success.svg";
                            break;
                        case 173:
                        case 174:
                            this.title = "Request Denied",
                            this.message = "Your request is already present.";
                            break;
                        case 175:
                            this.title = "Error",
                            this.message = "You are not allowed to apply for any more " + this.ds.dictionary.specializations.toLowerCase() + "s.";
                            break;
                        case 176:
                            this.title = "Error",
                            this.message = "You are not allowed to apply for this specialization.",
                            this.icon = "error.svg";
                            break;
                        case 177:
                            this.title = "Data Synced!",
                            this.message = "Your data has been successfully synced!",
                            this.icon = "success.svg";
                            break;
                        case 178:
                            this.title = "API Key already in use!",
                            this.message = "This API key is being used by some other organization.",
                            this.icon = "error.svg";
                            break;
                        case 179:
                            this.title = "Error",
                            this.message = "Skill Cluster Scan already reviewed. No approval activity allowed";
                            break;
                        case 180:
                            this.title = "Error",
                            this.message = "You need to add atleast 1 skill type";
                            break;
                        case 181:
                            this.title = "Error",
                            this.message = "You need to select exactly 2 skill tags";
                            break;
                        case 182:
                            this.title = "Error",
                            this.message = "You need to select atleast 1 skill tagging criteria";
                            break;
                        case 187:
                            this.title = "Error",
                            this.message = "This has active users mapped to it. Please assign them a different designation before deleting";
                            break;
                        case 200:
                            this.title = "Duplicate Service",
                            this.message = "Another service with same name or ID already exists";
                            break;
                        case 201:
                            this.title = "Duplicate Skill Cluster",
                            this.message = "Another skill cluster with same name or ID already exists";
                            break;
                        case 202:
                            this.title = "Skill Submited",
                            this.message = "Data submitted for approval by skill council",
                            this.icon = "success.svg";
                            break;
                        case 208:
                            this.title = "Error",
                            this.message = "No skill gaps found";
                            break;
                        case 261:
                            this.title = "Error",
                            this.message = "Number of active specializations should be equal to sum of number of primary and secondary specializations",
                            this.icon = "success.svg";
                            break;
                        case 287:
                            this.title = "Duplicate Role Cluster",
                            this.message = "Another role cluster with same name or ID already exists";
                            break;
                        case 289:
                            this.title = "Duplicate Location Cluster",
                            this.message = "Another location cluster with same name or ID already exists",
                            this.icon = "error.svg";
                            break;
                        case 295:
                            this.title = "Error",
                            this.message = "Duplicate role name";
                            break;
                        case 296:
                            this.title = "Invalid",
                            this.message = "Please provide atleast one Skill Item Id",
                            this.icon = "error.svg";
                            break;
                        case 297:
                            this.title = "Syncing in progress",
                            this.message = "Please wait unitl sync is complete",
                            this.icon = "error.svg";
                            break;
                        case 298:
                            this.title = "Cannot Enroll",
                            this.message = "Something went wrong unable to invite user to course",
                            this.icon = "error.svg";
                            break;
                        case 299:
                            this.title = "Cannot Enroll",
                            this.message = "Already applied before",
                            this.icon = "error.svg";
                            break;
                        case 300:
                            this.title = "Limit Exceeded",
                            this.message = "Number of External Courses for this user is reached",
                            this.icon = "error.svg";
                            break;
                        case 304:
                            this.title = "Error",
                            this.message = "Duplicate Skill Hierarchy name found",
                            this.icon = "error.svg";
                            break;
                        case 305:
                            this.title = "Error",
                            this.message = "Duplicate Skill Category name found",
                            this.icon = "error.svg";
                            break;
                        case 334:
                            this.title = "Not Found",
                            this.message = "No Recommendations Found to Sync",
                            this.icon = "error.svg";
                            break;
                        case 335:
                            this.title = "Access Denied",
                            this.message = "You do not have permission to view this page",
                            this.icon = "error.svg";
                            break;
                        case 336:
                            this.title = "Error",
                            this.message = "You need to add atleast one endorser";
                            break;
                        case 337:
                            this.title = "Error",
                            this.message = "You cannot have two levels with same configuration";
                            break;
                        case 347:
                            this.title = "Error",
                            this.message = "Skill item already present";
                            break;
                        case 349:
                            this.title = "Not Found",
                            this.message = "Preview file not found";
                            break;
                        case 350:
                            this.title = "Error",
                            this.message = "Error while getting list of files";
                            break;
                        case 403:
                            this.title = "Access Denied",
                            this.message = "We noticed that the action you have taken was blocked on your network. Please check with your Skillprism admin, to get this resolved.";
                            break;
                        case 405:
                            this.title = "Invalid Selection",
                            this.message = `Only ${this.ds.dictionary.designation.toLowerCase()}s in the proximity of your ${this.ds.dictionary.designationLevel.toLowerCase()} and ${this.ds.dictionary.designationCluster.toLowerCase()} can be selected as a ${this.ds.dictionary.bookmark.toLowerCase()}`;
                            break;
                        case 406:
                            this.title = "Limit Reached",
                            this.message = `Please unselect some ${this.ds.dictionary.bookmark}s to make this as ${this.ds.dictionary.bookmark}`;
                            break;
                        case 420:
                            this.title = "No Data Found",
                            this.message = "No data is available for the selected month and filters.";
                            break;
                        default:
                            this.title = "Ooops!",
                            this.message = "Something went wrong while trying to perform the operation. Please try again or contact our support"
                        }