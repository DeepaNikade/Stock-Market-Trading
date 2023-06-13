import logger from "./logger.js";

import{
    accountMaster,
    company,
    expiryMaster,
    groupMaster,
    gstRateMaster,
    itemMaster,
    scriptMaster,
    stateMaster,
    userForms,
    users
} from "../models/index.js";

export default function syncMssql(){
    const options ={
        logging:false,
        alter:false,
    };
    accountMaster.sync(options).catch((err) =>
    logger.error("failed to sync Account Master " + err)
  );
  company.sync(options).catch((err) =>
    logger.error("failed to sync Company " + err)
  );
  
  expiryMaster.sync(options).catch((err) =>
    logger.error("failed to sync Expiry Master " + err)
  );
  groupMaster.sync(options).catch((err) =>
    logger.error("failed to sync Group Master " + err)
  );
  gstRateMaster.sync(options).catch((err) =>
    logger.error("failed to sync Gst Rate Master " + err)
  );
  itemMaster.sync(options).catch((err) =>
    logger.error("failed to sync Item Master " + err)
  );
  scriptMaster.sync(options).catch((err) =>
    logger.error("failed to sync Script Master " + err)
  );
  stateMaster.sync(options).catch((err) =>
    logger.error("failed to sync State Master " + err)
  );
  userForms.sync(options).catch((err) =>
    logger.error("failed to sync User Forms " + err)
  );
  users.sync(options).catch((err) =>
    logger.error("failed to sync Users " + err)
  );
    
}