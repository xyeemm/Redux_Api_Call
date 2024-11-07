#include <stdio.h>

#define MAX_MARKS 100 // Maximum marks allowed

// Function to get valid input for marks
int get_marks(const char *subject) {
    int marks;
    while (1) {
        printf("Enter marks for %s (0 - 100): ", subject);
        scanf("%d", &marks);

        if (marks >= 0 && marks <= MAX_MARKS) {
            return marks;
        } else {
            printf("Invalid input! Marks must be between 0 and %d.\n", MAX_MARKS);
        }
    }
}

int main() {
    const char *student_id = "S12345678"; // Hardcoded student ID
    const char *student_name = "John Doe"; // Hardcoded student name
    int marks[3];
    int sum = 0, highest, lowest, average;
    char grade;

    // Display student info
    printf("Student ID: %s\n", student_id);
    printf("Student Name: %s\n", student_name);

    // Get marks for three subjects
    marks[0] = get_marks("Subject 1");
    marks[1] = get_marks("Subject 2");
    marks[2] = get_marks("Subject 3");

    // Calculate sum and identify highest and lowest marks
    highest = marks[0];
    lowest = marks[0];
    sum = marks[0];
    
    for (int i = 1; i < 3; i++) {
        sum += marks[i];
        if (marks[i] > highest) {
            highest = marks[i];
        }
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    // Calculate average
    average = sum / 3;

    // Determine grade based on average
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the results
    printf("\n--- Results ---\n");
    printf("Marks Obtained: Subject 1: %d, Subject 2: %d, Subject 3: %d\n", marks[0], marks[1], marks[2]);
    printf("Average Marks: %d\n", average);
    printf("Grade: %c\n", grade);
    printf("Highest Marks: %d\n", highest);
    printf("Lowest Marks: %d\n", lowest);

    return 0;
}
