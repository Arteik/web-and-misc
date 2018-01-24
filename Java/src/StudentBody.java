import java.util.Scanner;

public class StudentBody {
	Student[] student = new Student[3]; //creates 3 objects from a class we created earlier named student, with parameters of name,ID,and GPA in that order//
	Scanner console = new Scanner(System.in);
	public StudentBody() {
		for(int i = 0;i<3;i++) {
			student[i]=null;
		}
	}

	public void init() {
		String studentName;
		int studentID;
		double studentGPA;
		int i = 0;
		while (i < student.length) {
			System.out.println("Enter your Name");
			studentName = console.nextLine();
			System.out.println("Enter your Student ID");
			studentID = console.nextInt();
			System.out.println("Enter your GPA");
			studentGPA = console.nextDouble();
			student[i] = new Student(studentName, studentID, studentGPA);
			i++;
		}

	}

	public Student search(int id) {
		for (int i = 0; i < student.length - 1; i++) {
			if (student[i].getID() == id) {
				return student[i];

			}

		}
		return null;
	}

	public String toString() {
		String returnString = null;
		for (int i = 1; i < student.length + 1; i++) {
			returnString = returnString + ("\nStudent " + i + " Name: " + student[i].getName() + "\nStudent " + i
					+ " ID: " + student[i].getID() + "\nStudent " + i + " GPA: " + student[i].getGPA() + "\n");
		}
		return returnString;
	}

}