class Vessel {
  constructor(
    key,
    id,
    imageUrl,
    vesselname,
    fromAt,
    to,
    eta,
    etd,
    speed,
    windforce,
    isVesselperformance,
    isCertsurvey,
    isPMS,
    isPurchase,
    isCargooperation,
    isTradingareawx,
    isPSCvetting,
    isOthers,
    isIncidents,
    isMoCRA,
    isDrill,
    isAuditInspection,
    isManningDocuments,
    isOpenreportsComplaints,
    isCrewChangeApproval,
    isActionItem,
    isNotes,
    imonumber
  ) {
    this.key = key;
    this.id = id;
    this.imageUrl = imageUrl;
    this.vesselname = vesselname;
    this.fromAt = fromAt;
    this.to = to;
    this.eta = eta;
    this.etd = etd;
    this.speed = speed;
    this.windforce = windforce;
    this.isVesselperformance = this.getColor(isVesselperformance);
    this.isCertsurvey = this.getColor(isCertsurvey);
    this.isPMS = this.getColor(isPMS);
    this.isPurchase = this.getColor(isPurchase);
    this.isCargooperation = this.getColor(isCargooperation);
    this.isTradingareawx = this.getColor(isTradingareawx);
    this.isPSCvetting = this.getColor(isPSCvetting);
    this.isOthers = this.getColor(isOthers);
    this.isIncidents = this.getColor(isIncidents);
    this.isMoCRA = this.getColor(isMoCRA);
    this.isDrill = this.getColor(isDrill);
    this.isAuditInspection = this.getColor(isAuditInspection);
    this.isManningDocuments = this.getColor(isManningDocuments);
    this.isOpenreportsComplaints = this.getColor(isOpenreportsComplaints);
    this.isCrewChangeApproval = this.getColor(isCrewChangeApproval);
    this.isActionItem = this.getColor(isActionItem);
    this.isNotes = this.getColor(isNotes);
    this.imonumber = imonumber;
  }

  getColor(isParam) {
    if (isParam === "0") {
      return "RED";
    }
    if (isParam === "2") {
      return "Green";
    }
    if (isParam === "1") {
      return "YELLOW";
    }
    return "Green";
  }
}

export default Vessel;
