'use client';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogSubTitle,
} from '@/components/ui/dialog';

const Page = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | ''>('');
  const [correctAnswers, setCorrectAnswers] = useState<number | ''>('');
  const [marksPerQuestion, setMarksPerQuestion] = useState<number | ''>('');
  const [totalMarks, setTotalMarks] = useState<number | ''>('');
  const [wrongAnswers, setWrongAnswers] = useState<number | ''>('');
  const [marksObtained, setMarksObtained] = useState<number | ''>('');
  const [percentage, setPercentage] = useState<number | ''>('');
  const [emptyQuestion, setEmptyQuestion] = useState<number | ''>('');
  const [emptyQuestionMarks, setEmptyQuestionMarks] = useState<number>(0);
  const [negativeMarks, setNegativeMarks] = useState<number>(0.5);
  const [positiveMarks, setPositiveMarks] = useState<number | ''>('');
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (totalMarks) {
      const percentageScored = (Number(marksObtained) / Number(totalMarks)) * 100;
      setPercentage(percentageScored);
    }
  }, [marksObtained, totalMarks]);

  const calculatePositiveMarks = () => {
    const positiveMarks = Number(correctAnswers) * Number(marksPerQuestion);
    setPositiveMarks(positiveMarks);
  };

  const calculateTotalMarks = () => {
    const totalMarksScored = Number(numberOfQuestions) * Number(marksPerQuestion);
    setTotalMarks(totalMarksScored);
  };

  const calculateMarks = () => {
    if (Number(correctAnswers) <= Number(numberOfQuestions)) {
      const marksScored =
        Number(correctAnswers) * Number(marksPerQuestion) -
        Number(wrongAnswers) * Number(negativeMarks) -
        Number(emptyQuestion) * Number(emptyQuestionMarks);
      setMarksObtained(marksScored);
    } else {
      alert('Correct Answers should be less than or equal to Number of Questions');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateTotalMarks();
    calculatePositiveMarks();
    calculateMarks();
    setDialogOpen(true);
  };

  return (
    <div className="flex flex-col h-dvh w-dvw ">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center font-extrabold py-3 text-[#171e67]">Marks Calculator</h1>
        <hr className="bg-[#fc5416] h-2 w-20"></hr>
      </div>
      <div className="flex flex-col justify-center items-center my-5">
        <Card className="border-none outline-none px-20">
          <CardHeader>
            <CardTitle className="font-bold text-xl">Calculate your marks with a simple click</CardTitle>
            <CardDescription>
              <hr className="bg-[#fc5416] h-1 w-20"></hr>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 flex-col">
                  <label>Number of Questions</label>
                  <Input
                    type="number"
                    value={numberOfQuestions}
                    onChange={(e) => setNumberOfQuestions(parseFloat(e.target.value) || '')}
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <label>Correct Answers</label>
                  <Input
                    type="number"
                    value={correctAnswers}
                    onChange={(e) => setCorrectAnswers(parseFloat(e.target.value) || '')}
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <label>Wrong Answers</label>
                  <Input
                    type="number"
                    value={wrongAnswers}
                    onChange={(e) => setWrongAnswers(parseFloat(e.target.value) || '')}
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <label>Negative Marks</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="w-full">{negativeMarks}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Select Negative Marks</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setNegativeMarks(0.5)}>1/2</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setNegativeMarks(0.33)}>1/3</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setNegativeMarks(0.25)}>1/4</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setNegativeMarks(0.2)}>1/5</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setNegativeMarks(0.166)}>1/6</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex gap-1 flex-col">
                  <label>Marks Per Question</label>
                  <Input
                    type="number"
                    value={marksPerQuestion}
                    onChange={(e) => setMarksPerQuestion(parseFloat(e.target.value) || '')}
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <label>Empty Questions</label>
                  <Input
                    type="number"
                    value={emptyQuestion}
                    onChange={(e) => setEmptyQuestion(parseFloat(e.target.value) || '')}
                  />
                </div>
                <div className="flex gap-1 flex-col">
                  <label>Empty Questions Penalty?</label>
                  <Input
                    type="number"
                    value={emptyQuestionMarks}
                    placeholder="if any"
                    onChange={(e) => setEmptyQuestionMarks(parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
              <Button
                className="mt-3 bg-green-600 shadow-md hover:bg-green-900 hover:shadow-slate-950 hover:translate-y-1 transition-all duration-200"
                type="submit"
              >
                Calculate
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div>
        <footer className="flex flex-col gap-4  justify-center items-center h-20">
          <p className="text-center">
            Made with ❤️ by Saurav</p>
            <a href="https://portfolio160.vercel.app/">Contact Me</a>
              </footer>
              
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Calculation Results</DialogTitle>
            <DialogSubTitle>Remember, your marks are not a measure of your potential.   😊</DialogSubTitle>
            <DialogDescription>
                Total Marks: {totalMarks || 0}<br></br>
                Marks Obtained: {marksObtained || 0}<br></br>
                Percentage: {percentage ? percentage.toFixed(2) : 0}%<br></br>
                Positive Marks: {positiveMarks || 0}<br></br>
                Negative Marks: {negativeMarks || 0}<br></br>
                Empty Question Penalty : {emptyQuestionMarks}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
