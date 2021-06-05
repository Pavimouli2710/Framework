// Technical and Operations
export class DashboardMeasurePurchase {
  constructor(key, id, measurename, subcategoryid, mesurecode, measurecount) {
    this.key = key;
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.measurecount = measurecount;
  }
}
export class DashboardMeasureVesselPerformance {
  constructor(
    key,
    id,
    measurename,
    subcategoryid,
    mesurecode,
    overdue,
    pendingreview
  ) {
    this.key = key;
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.overdue = overdue;
    this.pendingreview = pendingreview;
  }
}

export class DashboardMeasureCertificates {
  constructor(
    key,
    id,
    measurename,
    subcategoryid,
    measurecode,
    overdue,
    days30,
    days60
  ) {
    this.key = key;
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.measurecode = measurecode;
    this.overdue = overdue;
    this.days30 = days30;
    this.days60 = days60;
  }
}

export class DashboardMeasurePlannedMaintenance {
  constructor(key, id, measurename, subcategoryid, mesurecode, measurecount) {
    this.key = key;
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.measurecount = measurecount;
  }
}

export class DashboardMeasurePlannedMaintenanceCount {
  constructor(id, measurename, subcategoryid, measurecount) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.measurecount = measurecount;
  }
}

export class DashboardMeasureCargoOperations {
  constructor(id, measurename, subcategoryid, statusnew, statusongoing) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.statusnew = statusnew;
    this.statusongoing = statusongoing;
  }
}

export class DashboardMeasureTradingAreaWx {
  constructor(id, measurename, subcategoryid, statusnew, statusongoing) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.statusnew = statusnew;
    this.statusongoing = statusongoing;
  }
}

export class DashboardMeasurePSCVetting {
  constructor(id, measurename, subcategoryid, statusnew, statusongoing) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.statusnew = statusnew;
    this.statusongoing = statusongoing;
  }
}

export class DashboardMeasureOthers {
  constructor(id, measurename, subcategoryid, statusnew, statusongoing) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.statusnew = statusnew;
    this.statusongoing = statusongoing;
  }
}

// HSEQA and Crew
export class DashboardMeasureAuditInspection {
  constructor(
    id,
    measurename,
    subcategoryid,
    days60,
    overdue,
    completed,
    reviewoverdue,
    reviewed,
    closureoverdue
  ) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.days60 = days60;
    this.overdue = overdue;
    this.completed = completed;
    this.reviewoverdue = reviewoverdue;
    this.reviewed = reviewed;
    this.closureoverdue = closureoverdue;
  }
}

export class DashboardMeasureIncident {
  constructor(
    key, 
    id, 
    measurename, 
    subcategoryid, 
    mesurecode, 
    measurecount
    ) {
    this.key = key;
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.measurecount = measurecount;
  }
}

export class DashboardMeasureDeficiency {
  constructor(
    id,
    measurename,
    subcategoryid,
    mesurecode,
    last24,
    statusopen,
    reviewoverdue,
    completionoverdue,
    pendingclosure
  ) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.last24 = last24;
    this.statusopen = statusopen;
    this.reviewoverdue = reviewoverdue;
    this.completionoverdue = completionoverdue;
    this.pendingclosure = pendingclosure;
  }
}

export class DashboardMeasureNonRoutineRiskAssessment {
  constructor(
    id,
    measurename,
    subcategoryid,
    mesurecode,
    pendingapproval,
    approvedforuse,
    expired
  ) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.pendingapproval = pendingapproval;
    this.approvedforuse = approvedforuse;
    this.expired = expired;
  }
}

export class DashboardMeasureTask {
  constructor(
    id,
    measurename,
    subcategoryid,
    mesurecode,
    days30,
    overdue,
    pendingclosure,
    extensionrequest,
    secondary
  ) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.days30 = days30;
    this.overdue = overdue;
    this.pendingclosure = pendingclosure;
    this.extensionrequest = extensionrequest;
    this.secondary = secondary;
  }
}

export class DashboardMeasureMoC {
  constructor(
    key,
    id,
    measurename,
    subcategoryid,
    measurecode,
    ship,
    office
  ) {
    this.key = key;
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.measurecode = measurecode;
    this.ship = ship;
    this.office = office;
  }
}

export class DashboardMeasureCrewChangeAndApproval {
  constructor(id, measurename, subcategoryid, mesurecode, measurecount) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.measurecount = measurecount;
  }
}

export class DashboardMeasureManningAndDocuments {
  constructor(id, measurename, subcategoryid, mesurecode, measurecount) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.measurecount = measurecount;
  }
}

export class DashboardMeasureOpenReportsComplaints {
  constructor(
    id,
    measurename,
    subcategoryid,
    mesurecode,
    statusopen,
    completed
  ) {
    this.id = id;
    this.measurename = measurename;
    this.subcategoryid = subcategoryid;
    this.mesurecode = mesurecode;
    this.statusopen = statusopen;
    this.completed = pendingreview;
  }
}

export default {
  DashboardMeasurePurchase,
  DashboardMeasureVesselPerformance,
  DashboardMeasureCertificates,
  DashboardMeasurePlannedMaintenance,
  DashboardMeasurePlannedMaintenanceCount,
  DashboardMeasureCargoOperations,
  DashboardMeasureTradingAreaWx,
  DashboardMeasurePSCVetting,
  DashboardMeasureOthers,
  DashboardMeasureAuditInspection,
  DashboardMeasureIncident,
  DashboardMeasureDeficiency,
  DashboardMeasureNonRoutineRiskAssessment,
  DashboardMeasureTask,
  DashboardMeasureMoC,
  DashboardMeasureCrewChangeAndApproval,
  DashboardMeasureManningAndDocuments,
  DashboardMeasureOpenReportsComplaints,
};
