import { Candidate } from './candidate';

class Districts {
    district_id: number;
    district_name: string;
    candidates: Candidate[];
}

export class Ballot {
    election_id: string;
    districts: Districts[];
}
