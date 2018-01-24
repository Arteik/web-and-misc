import java.util.Scanner;

public class StudentArrayTester {
	public static void main(String[] args) {
		StudentBody students = new StudentBody();
		students.init();
		Scanner keyboard = new Scanner(System.in);
		System.out.println("Enter the id of the student you are looking for: ");
		int studentID = keyboard.nextInt();
		Student target = students.search(studentID);
		if (target != null)
			System.out.println(target);
		else
			System.out.println("Student not found … ");

		System.out.println("Student Body Information:" + students);
	} // end of main
} // end of StudentArrayTester
