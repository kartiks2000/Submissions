export interface Task {
    id: string;
    task: string;
    status: 0 | 1 | 2; // 0 -> Low Risk, 1 -> Uncomplete, 2 -> Unassigned
    from: string;
    to: string;
    customerAddress: string;
    dueDate: Date;
  }