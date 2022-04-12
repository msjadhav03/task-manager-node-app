function createNewTask(req, res) {
  if (req.body.name != null) {
    require("../services/TaskServices")
      .createNewTask(req.body)
      .then((result) => {
        if (result == true) {
          res.status(201).json({
            code: 201,
            name: "created",
            message: "New task added - success",
          });
        } else {
          res.status(400).json({
            code: 400,
            name: "failed",
            error: "New task creation failed - status",
          });
        }
      })
      .catch((err) => {
        res.status(err.code).json({
          code: err.code,
          name: err.name,
          error: err.err,
        });
      });
  } else {
    res.status(422).json({
      code: 422,
      name: "fields_missing",
      error: "Required field missing",
    });
  }
}

function fetchAllTask(req, res) {
  require("../services/TaskServices")
    .fetchAllTask(req.body)
    .then((data) => {
      res.status(200).json({
        code: 200,
        name: "found",
        message: "Fetch successful",
        data: data,
      });
    })
    .catch((err) => {
      res.status(err.code).json({
        code: err.code,
        name: err.name,
        error: err.err,
      });
    });
}

function deleteTaskById(req, res) {
  if (req.body._id != null) {
    require("../services/TaskServices")
      .deleteTaskById(req.body._id)
      .then((result) => {
        if (result == true) {
          res.status(201).json({
            code: 201,
            name: "deleted",
            message: "Task deleted - success",
          });
        } else {
          res.status(400).json({
            code: 400,
            name: "failed",
            error: "Task deletion failed - status",
          });
        }
      })
      .catch((err) => {
        res.status(err.code).json({
          code: err.code,
          name: err.name,
          error: err.err,
        });
      });
  } else {
    res.status(422).json({
      code: 422,
      name: "fields_missing",
      error: "Required field missing",
    });
  }
}

function updateTaskById(req, res) {
  if (req.body.name != null && req.body._id != null) {
    require("../services/TaskServices")
      .updateTask(req.body)
      .then((result) => {
        if (result == true) {
          res.status(201).json({
            code: 201,
            name: "updated",
            message: "Task updated - success",
          });
        } else {
          res.status(400).json({
            code: 400,
            name: "failed",
            error: "Updation failed - status",
          });
        }
      })
      .catch((err) => {
        res.status(err.code).json({
          code: err.code,
          name: err.name,
          error: err.err,
        });
      });
  } else {
    res.status(422).json({
      code: 422,
      name: "fields_missing",
      error: "Required field missing",
    });
  }
}

module.exports = {
  createNewTask,
  fetchAllTask,
  deleteTaskById,
  updateTaskById,
};
